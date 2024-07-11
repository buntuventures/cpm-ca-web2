"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../Button/Button";
import classes from "./Forms.module.css";
import Input from "@/componentsEn/Forms/Input";
import Select from "@/componentsEn/Forms/Select";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    domaine: "Thérapie Individuelle",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLeadFormClicked = () => {
    router.push(
      `/reservation?data=${encodeURIComponent(JSON.stringify(formData))}`
    );
  };

  return (
    <div className={classes.FormWrapper}>
      <div
        style={{
          textTransform: "uppercase",
          backgroundColor: "#0071BC",
          color: "white",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Formulaire de rendez-vous
      </div>
      <div className={classes.FormBody}>
        <div style={{ marginBottom: 10 }}>
          <div>Prénom(s)</div>
          <Input
            name="firstName"
            className={classes.InputStyle}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <div>Nom(s)</div>
          <Input
            name="lastName"
            className={classes.InputStyle}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <div>Téléphone</div>
          <Input
            name="phoneNumber"
            className={classes.InputStyle}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <div>Courriel</div>
          <Input
            name="email"
            className={classes.InputStyle}
            onChange={handleInputChange}
          />
        </div>
        <div style={{ marginBottom: 20 }}>
          <div>Domaine</div>
          <Select
            name="domaine"
            className={classes.SelectInput}
            changed={handleInputChange}
          >
            <option value="Thérapie Individuelle">Thérapie Individuelle</option>
            <option value="Thérapie de Couple">Thérapie de Couple</option>
            <option value="Thérapie Familiale">Thérapie Familiale</option>
            <option value="Téléthérapie">Téléthérapie</option>
          </Select>
        </div>
        <div>
          <Button
            color="primary"
            text="Prendre rendez-vous"
            styles={styles}
            clicked={handleLeadFormClicked}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  width: "100%",
  borderRadius: 0,
};

export default LeadForm;
