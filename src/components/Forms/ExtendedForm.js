"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import recordMobileCall from "../../utils/google_conversion_mobile_call";
import Input from "./Input";
import Select from "./Select";
import Button from "../Button/Button";
import ToolTip from "../ToolTip/ToolTip";
import classes from "./Forms.module.css";

function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };

  gtag("event", "Form", "submit", "French");
  return false;
}

const ExtendedForm = ({ initialFormData }) => {
  const [state, setState] = useState({
    step: 1,
    isLoading: false,
    backBtnDisabled: false,
    formData: {
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
    },
    formDataErrors: {
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
    },
    serverError: false,
  });

  useEffect(() => {
    if (initialFormData) {
      setState(prevState => ({
        ...prevState,
        formData: {
          ...prevState.formData,
          ...initialFormData,
        },
      }));
    }
  }, [initialFormData]);

  const handleNextStep = () => {
    setState(prevState => ({ ...prevState, isLoading: true, serverError: false, backBtnDisabled: true }));
    
    setTimeout(() => {
      if (state.step === 1) {
        const errors = checkErrorStepOne({ ...state.formData });
        if (errors) {
          setState(prevState => ({
            ...prevState,
            isLoading: false,
            backBtnDisabled: false,
            formDataErrors: {
              ...prevState.formDataErrors,
              stepOne: {
                ...prevState.formDataErrors.stepOne,
                ...errors,
              },
            },
          }));
        } else {
          setState(prevState => ({
            ...prevState,
            step: prevState.step + 1,
            isLoading: false,
            backBtnDisabled: false,
          }));
        }
      } else if (state.step === 2) {
        const possibleErrors = {
          termsAcceptedError: state.formData.termsAccepted === false,
          cancellationPolicyError: state.formData.cancellationPolicy === false,
        };
        const errors = checkErrors(possibleErrors);
        if (errors) {
          setState(prevState => ({
            ...prevState,
            isLoading: false,
            backBtnDisabled: false,
            formDataErrors: {
              ...prevState.formDataErrors,
              stepTwo: {
                ...prevState.formDataErrors.stepTwo,
                ...errors,
              },
            },
          }));
        } else {
          let prefix = "M.";
          if (state.formData.gender === "Feminin") {
            prefix = "Mme";
          }
          const API_ENDPOINT = `https://us-central1-cpm-ca.cloudfunctions.net/cpmca/new-lead`;
          axios
            .post(API_ENDPOINT, {
              ...state.formData,
              language: "French",
              prefix: prefix,
            })
            .then(() => {
              setState(prevState => ({
                ...prevState,
                step: prevState.step + 1,
                isLoading: false,
                backBtnDisabled: false,
              }));
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
              setState(prevState => ({
                ...prevState,
                isLoading: false,
                serverError: true,
                backBtnDisabled: false,
              }));
            });
        }
      }
    }, 2000);
  };

  const handleBackStep = () => {
    if (state.step > 1) setState(prevState => ({ ...prevState, step: prevState.step - 1 }));
  };

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setState(prevState => ({
      ...prevState,
      formData: {
        ...prevState.formData,
        [name]: type === 'checkbox' ? checked : value,
      },
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
    <div style={{ maxWidth: 730, backgroundColor: "#F8F8F8", margin: "auto", marginBottom: 100 }}>
      <div>
        <FormHeader
          step={state.step}
          clicked={(e) => {
            const step = parseInt(e.target.getAttribute("data-step"));
            if (step < state.step) {
              setState(prevState => ({ ...prevState, step }));
            }
          }}
        />

        {state.step === 1 && (
          <StepOne
            formData={state.formData}
            formDataErrors={state.formDataErrors.stepOne}
            changed={handleInputChange}
          />
        )}

        {state.step === 2 && (
          <ReviewStep
            formData={state.formData}
            formDataErrors={state.formDataErrors.stepTwo}
            changed={handleInputChange}
          />
        )}

        {state.step === 3 && <ThankYou />}
      </div>

      <div style={{
        display: "flex",
        justifyContent: `${state.step === 1 ? "flex-end" : "space-between"}`,
        padding: "20px",
      }}>
        {state.step !== 1 && state.step !== 3 && (
          <Button
            text="Retour"
            styles={{
              backgroundColor: "#656565",
              border: "1px solid #656565",
              color: "#fff",
            }}
            clicked={handleBackStep}
            disabled={state.backBtnDisabled}
          />
        )}

        {state.step === 1 && (
          <Button
            text="Continuer"
            color="primary"
            clicked={handleNextStep}
            loading={state.isLoading}
          />
        )}

        {state.step === 2 && (
          <Button
            text="Continuer"
            color="primary"
            clicked={handleNextStep}
            loading={state.isLoading}
          />
        )}
      </div>
      <div style={{ padding: "0 20px 20px", fontSize: "1.4rem", lineHeight: 1.3 }}>
        {state.serverError && (
          <RequiredError text="Votre soumission n'a pas fonctionné. Veuillez réessayer, si le problème persiste, contactez nous au 613-252-5227 pour prendre votre rendez-vous." />
        )}
      </div>
    </div>
  );
};

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
        padding: " 0 20px",
      }}
    >
      <div>{title}</div>
      {step === 3 ? null : (
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

const StepOne = ({ formData, formDataErrors: errors, changed }) => {
  return (
    <div>
      <p style={{ padding: "20px 20px 10px", fontSize: "0.9rem" }}>
        Ce formulaire est réservé aux personnes domiciliées au Canada. Vous
        pouvez demander un rendez-vous en ligne en remplissant le formulaire
        suivant ou par téléphone au{" "}
        <span onClick={() => recordMobileCall()}>
          <a href="tel:+16132525227">613-252-5227</a>
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
      {/* Autres champs du formulaire... */}
    </div>
  );
};

const ReviewStep = ({ formData, formDataErrors: errors, changed }) => {
  return (
    <div>
      <p style={{ padding: "20px 20px 10px", fontSize: "0.9rem" }}>
        Confirmer vos informations and selectioner votre heure d&apos;appel
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
      {/* Autres champs de révision... */}
      <div style={{ padding: "10px 20px 16px" }}>
        <div style={{ display: "flex", alignItems: "baseline" }}>
          <input type="checkbox" name="termsAccepted" onChange={changed} checked={formData.termsAccepted} />
          <span style={{ paddingLeft: 6 }}>
            J&apos;accepte les{" "}
            <Link href="/politique-de-confidentialite" target="_blank">
              conditions relatives à la transmission et à la confidentialité des
              données et les règles d&apos;utilisation
            </Link>{" "}
            liées à la demande de rendez-vous.
          </span>
        </div>
        
        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
          {errors.termsAcceptedError ? <RequiredError /> : null}
        </div>

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <ToolTip fontSize="0.8rem">
            <input
              type="checkbox"
              name="cancellationPolicy"
              onChange={changed}
            />
            <span style={{ paddingLeft: 6 }}>
              J&apos;accepte la politique d&apos;annulation de 48 heures
            </span>
          </ToolTip>
        </div>
        <div style={{ paddingLeft: 20, paddingBottom: 10 }}>
          {errors.cancellationPolicyError ? <RequiredError /> : null}
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
          src="/images/check_circle_outline-24px.svg"
          alt="Icon Success"
          style={{ width: 40, height: 40 }}
        />
      </div>
    </div>
    <p>
      Vos informations ont été soumises avec succès. Dans quelques instants,
      vous recevrez notre e-mail de confirmation automatique. S&apos;il vous
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
          acceptez notre politique d&apos;annulation de 48 heures
        </ToolTip>
      </strong>
      , c&apos;est pour le premier rendez-vous seulement, par la suite les
      conditions du praticien s&apos;appliquent.
    </p>
    <p>
      Si vous avez des questions n&apos;hésitez pas à nous contacter au{" "}
      <a
        href="tel:+16132525227"
        style={{ textDecoration: "underline", fontWeight: "bold" }}
        onClick={() => recordMobileCall()}
      >
        613-252-5227
      </a>{" "}
      du <strong>Lundi au Vendredi de 9h à 12h et 13h à 17h</strong>.
    </p>
    <p>
      <strong>Nous avons hâte de vous aider.</strong>
    </p>
  </div>
);


export default ExtendedForm;