import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import Select from "./Select";
import Button from "../Button/Button";
import ToolTip from "../ToolTip/ToolTip";
import CheckIcon from "/images/check_circle_outline-24px.svg";
import classes from "./Forms.module.css";
import Image from "next/image";
import Link from "next/link";

const ExtendedForm = ({ formData: initialFormData }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [backBtnDisabled, setBackBtnDisabled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "Canada",
    dateOfBirth: "",
    gender: "Feminin",
    domaine: "Thérapie Individuelle",
    desiredCallTime: "9h -12h15",
    desiredConsultationTime: "Premier disponible",
    termsAccepted: false,
    cancellationPolicy: false,
  });
  const [formDataErrors, setFormDataErrors] = useState({
    stepOne: {
      firstNameError: false,
      lastNameError: false,
      phoneNumberError: false,
      emailError: false,
      addressError: false,
      cityError: false,
      postalCodeError: false,
      countryError: false,
      dateOfBirthError: false,
    },
    stepTwo: {
      termsAcceptedError: false,
      cancellationPolicyError: false,
    },
  });
  const [serverError, setServerError] = useState(false);

  useEffect(() => {
    if (initialFormData) {
      setFormData((prevData) => ({
        ...prevData,
        ...initialFormData,
      }));
    }
  }, [initialFormData]);

  const handleNextStep = () => {
    setIsLoading(true);
    setServerError(false);
    setBackBtnDisabled(true);

    setTimeout(() => {
      if (step === 1) {
        const errors = checkErrorStepOne(formData);
        if (errors) {
          setFormDataErrors((prevErrors) => ({
            ...prevErrors,
            stepOne: {
              ...prevErrors.stepOne,
              ...errors,
            },
          }));
          setIsLoading(false);
          setBackBtnDisabled(false);
        } else {
          setStep((prevStep) => prevStep + 1);
          setIsLoading(false);
          setBackBtnDisabled(false);
        }
      } else if (step === 2) {
        const possibleErrors = {
          termsAcceptedError: formData.termsAccepted === false,
          cancellationPolicyError: formData.cancellationPolicy === false,
        };
        const errors = checkErrors(possibleErrors);
        if (errors) {
          setFormDataErrors((prevErrors) => ({
            ...prevErrors,
            stepTwo: {
              ...prevErrors.stepTwo,
              ...errors,
            },
          }));
          setIsLoading(false);
          setBackBtnDisabled(false);
        } else {
          let prefix = "M.";
          if (formData.gender === "Feminin") {
            prefix = "Mme";
          }
          const API_ENDPOINT = `https://us-central1-cpm-ca.cloudfunctions.net/cpmca/new-lead`;
          axios
            .post(API_ENDPOINT, {
              ...formData,
              language: "French",
              prefix: prefix,
            })
            .then(() => {
              setStep((prevStep) => prevStep + 1);
              setIsLoading(false);
              setBackBtnDisabled(false);
              if (window.gtag) {
                window.gtag("event", "conversion", {
                  send_to: "AW-997202270/jCK3CNSk7o0BEN6ywNsD",
                });
                window.gtag("event", "submit", {
                  event_category: "Form",
                  event_label: "French",
                });
              }
            })
            .catch((err) => {
              setIsLoading(false);
              setServerError(true);
              setBackBtnDisabled(false);
            });
        }
      }
    }, 2000);
  };

  const handleBackStep = () => {
    if (step > 1) setStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "termsAccepted" || name === "cancellationPolicy"
          ? checked
          : value,
    }));
  };

  const checkErrorStepOne = (stepOneData) => {
    const obj = {
      firstNameError: stepOneData.firstName.length < 1,
      lastNameError: stepOneData.lastName.length < 1,
      phoneNumberError: stepOneData.phoneNumber.length < 1,
      emailError: stepOneData.email.length < 1,
      addressError: stepOneData.address.length < 1,
      cityError: stepOneData.city.length < 1,
      postalCodeError: stepOneData.postalCode.length < 1,
      countryError: stepOneData.country.length < 1,
      dateOfBirthError: stepOneData.dateOfBirth.length < 1,
    };
    const errors = Object.keys(obj).filter((item) => obj[item] === true);

    return errors.length === 0 ? false : obj;
  };

  const checkErrors = (obj) => {
    const errors = Object.keys(obj).filter((item) => obj[item] === true);

    return errors.length === 0 ? false : obj;
  };

  return (
    <div className={classes.FormWrapper}>
      <div>
        <FormHeader
          step={step}
          clicked={(e) => {
            const step = parseInt(e.target.getAttribute("data-step"));
            if (step < step) {
              setStep(step);
            }
          }}
        />

        {step === 1 && (
          <StepOne
            formData={formData}
            changed={handleInputChange}
            formDataErrors={formDataErrors}
          />
        )}
        {step === 2 && (
          <ReviewStep
            formData={formData}
            changed={handleInputChange}
            formDataErrors={formDataErrors}
          />
        )}
        {step === 3 && <ThankYou />}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: `${step === 1 ? "flex-end" : "space-between"}`,
          padding: "20px",
        }}
      >
        {step !== 1 && step !== 3 && (
          <Button
            text="Retour"
            color="primary"
            clicked={handleBackStep}
            disabled={backBtnDisabled}
          />
        )}
        {step === 1 && (
          <Button
            text="Continuer"
            color="primary"
            clicked={handleNextStep}
            loading={isLoading}
          />
        )}
        {step === 2 && (
          <Button
            text="Continuer"
            color="primary"
            clicked={handleNextStep}
            loading={isLoading}
          />
        )}
      </div>

      <div
        style={{ padding: "0 20px 20px", fontSize: "1.4rem", lineHeight: 1.3 }}
      >
        {serverError && (
          <RequiredError text="Votre soumission n'a pas fonctionner. Veuillez réessayer, si le probleme persiste, contactez nous au 613-252-5227 pour prendre votre rendez-vous." />
        )}
      </div>
    </div>
  );
};

export default ExtendedForm;

const red = "#ff6d6b";
const green = "#00B648";
const darkBlue = "#004c92";
const blue = "#0071BC";

const RequiredError = ({ text, size }) => (
  <div style={{ color: red, fontSize: `${size ? size : "inherit"}` }}>
    <small>{text ? text : "Ce champ est obligatoire"}</small>
  </div>
);

const FormHeader = ({ step, clicked }) => {
  let title = "Info du patient";
  if (step === 2) title = "Confirmation";
  if (step === 3) title = "Merci d'avoir soumis votre formulaire!";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: `${step === 4 ? "center" : "space-between"}`,
        height: 48,
        alignItems: "center",
        backgroundColor: "#0071BC",
        color: "#fff",
        padding: "0 20px",
      }}
    >
      <div>{title}</div>
      {step !== 3 && (
        <div>
          <Progress step={step} clicked={clicked} />
        </div>
      )}
    </div>
  );
};

const Progress = ({ step, clicked }) => (
  <div style={{ display: "flex" }}>
    <div
      className={
        step === 1
          ? [classes.ProgressItem, classes.Active].join(" ")
          : classes.ProgressItem
      }
      onClick={clicked}
      data-step="1"
    >
      1
    </div>
    <div
      className={
        step === 2
          ? [classes.ProgressItem, classes.Active].join(" ")
          : classes.ProgressItem
      }
      onClick={clicked}
      data-step="2"
    >
      2
    </div>
  </div>
);

const StepOne = (props) => {
  const {
    formData,
    changed,
    formDataErrors: { stepOne: errors },
  } = props;
  return (
    <div>
      <p style={{ padding: "20px 20px 10px", fontSize: "0.9rem" }}>
        Ce formulaire est réservé aux personnes domiciliées au Canada. Vous
        pouvez demander un rendez-vous en ligne en remplissant le formulaire
        suivant ou par téléphone au{" "}
        <span onClick={() => recordMobileCall()}>
          <Link href="tel:+16132525227">613-252-5227</Link>
        </span>
        .
      </p>
      <div style={{ padding: "0 20px 10px" }}>
        <div className={classes.FormRowWrapper}>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Prénom</div>
            <Input
              value={formData.firstName}
              name="firstName"
              changed={changed}
              styles={{
                borderColor: `${errors.firstNameError ? red : "inherit"}`,
              }}
            />
            {errors.firstNameError && <RequiredError />}
          </div>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Nom de famile</div>
            <Input
              value={formData.lastName}
              name="lastName"
              changed={changed}
              styles={{
                borderColor: `${errors.lastNameError ? red : "inherit"}`,
              }}
            />
            {errors.lastNameError && <RequiredError />}
          </div>
        </div>
      </div>
      <div style={{ padding: "0 20px 10px" }}>
        <div className={classes.FormRowWrapper}>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Courriel</div>
            <Input
              value={formData.email}
              name="email"
              changed={changed}
              styles={{ borderColor: `${errors.emailError ? red : "inherit"}` }}
            />
            {errors.emailError && <RequiredError />}
          </div>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Téléphone</div>
            <Input
              value={formData.phoneNumber}
              name="phoneNumber"
              changed={changed}
              styles={{
                borderColor: `${errors.phoneNumberError ? red : "inherit"}`,
              }}
            />
            {errors.phoneNumberError && <RequiredError />}
          </div>
        </div>
      </div>
      <div style={{ padding: "0 20px 10px" }}>
        <div className={classes.FormRowWrapper}>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Adresse</div>
            <Input
              value={formData.address}
              name="address"
              changed={changed}
              styles={{
                borderColor: `${errors.addressError ? red : "inherit"}`,
              }}
            />
            {errors.addressError && <RequiredError />}
          </div>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Pays</div>
            <Input
              value={formData.country}
              name="country"
              changed={changed}
              styles={{
                borderColor: `${errors.countryError ? red : "inherit"}`,
              }}
            />
            {errors.countryError && <RequiredError />}
          </div>
        </div>
      </div>
      <div style={{ padding: "0 20px 10px" }}>
        <div className={classes.FormRowWrapper}>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Code postal</div>
            <Input
              value={formData.postalCode}
              name="postalCode"
              changed={changed}
              styles={{
                borderColor: `${errors.postalCodeError ? red : "inherit"}`,
              }}
            />
            {errors.postalCodeError && <RequiredError />}
          </div>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Ville</div>
            <Input
              value={formData.city}
              name="city"
              changed={changed}
              styles={{ borderColor: `${errors.cityError ? red : "inherit"}` }}
            />
            {errors.cityError && <RequiredError />}
          </div>
        </div>
      </div>
      <div style={{ padding: "0 20px 10px" }}>
        <div className={classes.FormRowWrapper}>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Date de naissance</div>
            <Input
              placeholder="JJ/MM/AAAA"
              value={formData.dateOfBirth}
              name="dateOfBirth"
              changed={changed}
              styles={{
                borderColor: `${errors.dateOfBirthError ? red : "inherit"}`,
              }}
            />
            {errors.dateOfBirthError && <RequiredError />}
          </div>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Genre</div>
            <div style={{ display: "flex" }}>
              <div style={{ flexBasis: "50%" }}>
                <input
                  name="gender"
                  type="radio"
                  value="Feminin"
                  checked={formData.gender === "Feminin"}
                  onChange={changed}
                />{" "}
                Féminin
              </div>
              <div style={{ flexBasis: "50%" }}>
                <input
                  name="gender"
                  type="radio"
                  value="Masculin"
                  checked={formData.gender === "Masculin"}
                  onChange={changed}
                />{" "}
                Masculin
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewStep = (props) => {
  const {
    formData,
    changed,
    formDataErrors: { stepTwo: errors },
  } = props;
  return (
    <div>
      <p style={{ padding: "20px 20px 10px", fontSize: "0.9rem" }}>
        Confirmer vos informations and selectioner votre heure d&apos; appel
        souhaité pour la prise de rendez-vous ainsi que votre date idéale de
        consultation.
      </p>
      <div style={{ padding: "0 20px 16px" }}>
        <h4>Votre contact</h4>
        <div className={classes.FormRowWrapper}>
          <div className={classes.FormRow}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px dashed #E8E8E8",
                padding: "10px 0 6px",
              }}
            >
              <span className={classes.Label}>Prénom</span>
              <span>{formData.firstName}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px dashed #E8E8E8",
                padding: "10px 0 6px",
              }}
            >
              <span className={classes.Label}>Nom de famille</span>
              <span>{formData.lastName}</span>
            </div>
          </div>
          <div className={classes.FormRow}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px dashed #E8E8E8",
                padding: "10px 0 6px",
              }}
            >
              <span className={classes.Label}>Télephone</span>
              <span>{formData.phoneNumber}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderTop: "1px dashed #E8E8E8",
                padding: "10px 0 6px",
              }}
            >
              <span className={classes.Label}>Courriel</span>
              <span>{formData.email}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: "0 20px 16px" }}>
        <div className={classes.FormRowWrapper}>
          <div style={{ width: "100%" }}>
            <div className={classes.Label}>Domaine</div>
            <Select
              name="domaine"
              value={formData.domaine}
              changed={changed}
              styles={{ width: "100%" }}
            >
              <option value="Thérapie Individuelle">
                Thérapie Individuelle
              </option>
              <option value="Thérapie de Couple">Thérapie de Couple</option>
              <option value="Thérapie Familiale">Thérapie Familiale</option>
              <option value="Téléthérapie">Téléthérapie</option>
            </Select>
          </div>
        </div>
      </div>

      <div style={{ padding: "0 20px 16px" }}>
        <div className={classes.FormRowWrapper}>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Heure d&apos; appel souhaitée</div>
            <Select
              name="desiredCallTime"
              value={formData.desiredCallTime}
              changed={changed}
            >
              <option value="9h -12h15">9h - 12h15</option>
              <option value="13h30 - 18h30">13h30 - 18h30</option>
              <option value="Peu importe">Peu importe</option>
            </Select>
          </div>
          <div className={classes.FormRow}>
            <div className={classes.Label}>Préférence de rendez-vous</div>
            <Select
              name="desiredConsultationTime"
              value={formData.desiredConsultationTime}
              changed={changed}
            >
              <option value="Premier disponible">Premier disponible</option>
              <option value="Lundi - avant midi">Lundi - avant midi</option>
              <option value="Lundi - après midi">Lundi - après midi</option>
              <option value="Mardi - avant midi">Mardi - avant midi</option>
              <option value="Mardi - après midi">Mardi - après midi</option>
              <option value="Mercredi - avant midi">
                Mercredi - avant midi
              </option>
              <option value="Mercredi - après midi">
                Mercredi - après midi
              </option>
              <option value="Jeudi - avant midi">Jeudi - avant midi</option>
              <option value="Jeudi - après midi">Jeudi - après midi</option>
              <option value="Vendri - avant midi">Vendredi - avant midi</option>
              <option value="Vendri - après midi">Vendredi - après midi</option>
            </Select>
          </div>
        </div>
      </div>

      <p
        style={{
          padding: "10px",
          margin: "10px 20px",
          fontSize: "0.8rem",
          borderRadius: 2,
          color: "#0288d1",
          backgroundColor: "#e1f5fe",
        }}
      >
        Les demandes sont traitées par les admissions du CPM du lundi au
        vendredi à partir de 13:30. Vous serez directement contacté au moyen des
        coordonnées que vous nous avez indiquées dans un délai de 1 jour
        ouvrable pour recevoir un rendez-vous.
      </p>

      <div style={{ padding: "10px 20px 16px" }}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <input type="checkbox" name="termsAccepted" onChange={changed} />
          <span style={{ paddingLeft: 6 }}>
            J&apos; accepte les{" "}
            <Link
              style={{ textDecoration: "underline" }}
              href="/politique-de-confidentialite"
              target="_blank"
            >
              conditions relatives à la transmission et à la confidentialité des
              données et les règles d&apos; utilisation
            </Link>{" "}
            liées à la demande de rendez-vous.
          </span>
        </div>
        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
          {errors.termsAcceptedError && <RequiredError />}
        </div>

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <ToolTip fontSize="0.8rem">
            <input
              type="checkbox"
              name="cancellationPolicy"
              onChange={changed}
            />
            <span style={{ paddingLeft: 6 }}>
              J&apos; accepte la politique d&apos; annulation de 48 heures
            </span>
          </ToolTip>
        </div>
        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
          {errors.cancellationPolicyError && <RequiredError />}
        </div>
      </div>
    </div>
  );
};

const ThankYou = () => (
  <div style={{ padding: 20 }}>
    <div style={{ padding: 20 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image
          src={CheckIcon}
          alt="Icon Success"
          width={40} height={40}
          style={{ width: 40, height: 40 }}
        />
      </div>
    </div>
    <p>
      Vos informations ont été soumises avec succès. Dans quelques instants,
      vous recevrez notre e-mail de confirmation automatique. S&apos; il vous
      plaît, regarder dans votre dossier de courrier indésirable au cas où il se
      serait égaré. (Vous pouvez ajouter admin[arobase]cpm-ca[point]org pour
      empêcher le filtrage antispam.)
    </p>
    <p>
      La prochaine étape consiste à attendre notre appel. Nous vous contacterons
      dans les plus brefs délais pour fixer un rendez-vous.
    </p>
    <p>
      En fixant un rendez-vous avec nous, vous{" "}
      <strong>
        <ToolTip fontSize="0.8rem">
          acceptez notre politique d&apos; annulation de 48 heures
        </ToolTip>
      </strong>
      , c&apos; est pour le premier rendez-vous seulement, par la suite les
      conditions du praticien s&apos; appliquent.
    </p>
    <p>
      Si vous avez des questions n&apos; hésitez pas à nous contacter au{" "}
      <Link
        href="tel:+16132525227"
        style={{ textDecoration: "underline", fontWeight: "bold" }}
        onClick={() => recordMobileCall()}
      >
        613-252-5227
      </Link>{" "}
      du <strong>Lundi au Vendredi de 9h à 12h et 13h à 17h</strong>.
    </p>
    <p>
      <strong>Nous avons hâte de vous aider.</strong>
    </p>
  </div>
);
