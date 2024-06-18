import React, { Component } from "react";
import classes from "../Content.module.css";

export default class Definitions extends Component {
  state = {
    activeTab: "tab1",
  };

  handleTabClick = (event) => {
    this.setState({ activeTab: event.target.getAttribute("data-tab") });
  };

  render() {
    const { activeTab } = this.state;
    const { isMobile } = this.props;

    return (
      <div>
        <div style={{ maxWidth: 1170, padding: "40px 20px", margin: "auto" }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ margin: "0 0 10px 0", color: "#1689DF" }}>
              Définitions
            </h2>
            <h4>Qu&apos;est ce que la psychiatrie et la psychologie?</h4>
            <p>
              Les deux termes sont confus, mais ils réfèrent tous au processus
              de rencontrer un professionnel de la santé mentale pour vous aider
              à vous sentir mieux. On vous dirigera vers l&apos;expert approprié
              pour vos besoins.
            </p>
          </div>
          {isMobile ? (
            <MobileTabs activeTab={activeTab} clicked={this.handleTabClick} />
          ) : (
            <DeskTopTab activeTab={activeTab} clicked={this.handleTabClick} />
          )}
        </div>
      </div>
    );
  }
}

const MobileTabs = ({ activeTab, clicked }) => (
  <div>
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <MobileTabItem
        title="Psychothérapeute"
        activeTab={activeTab}
        tabKey="tab1"
        clicked={clicked}
      >
        Formé à une technique de thérapie particulière, le psychothérapeute a
        des aptitudes de suivi psychologique et travaille plus en profondeur
        avec le patient. La psychothérapie est donc de moyen à long terme.
      </MobileTabItem>
      <MobileTabItem
        title="Psychologue"
        activeTab={activeTab}
        tabKey="tab2"
        clicked={clicked}
      >
        Un psychologue a une formation similaire à un psychothérapeute, mais
        détient également un diplôme en psychologie.
      </MobileTabItem>
      <MobileTabItem
        title="Neuropsychologue"
        activeTab={activeTab}
        tabKey="tab3"
        clicked={clicked}
      >
        Un neuropsychologue est un psychologue spécialisé dans la compréhension
        de la relation entre le cerveau physique et le comportement. Les
        troubles dans le cerveau et le système nerveux peuvent modifier le
        comportement et la fonction cognitive. Donc les prestations d&apos;un
        neuropsychologue sont principalement axées dans les domaines de la
        neuropsychologie cognitive et de la neuro-réhabilitation.
      </MobileTabItem>
      <MobileTabItem
        title="Médecine du sommeil"
        activeTab={activeTab}
        tabKey="tab4"
        clicked={clicked}
      >
        La médecine du sommeil est un domaine médical consacré aux troubles du
        sommeil. Les spécialistes proposent une approche diagnostique et
        thérapeutique adaptée aux pathologies (insomnies, ronflements,
        narcolepsie, apnées du sommeil, somnambulisme, décalages horaires, etc.)
      </MobileTabItem>
      <MobileTabItem
        title="Psychiatre et pédopsychiatre"
        activeTab={activeTab}
        tabKey="tab5"
        clicked={clicked}
      >
        Le psychiatre assure le diagnostic, la prescription des médicaments en
        cas de besoin, ainsi que le suivi médical. Il est le responsable de
        toutes les prises en charge et encadre l&apos;équipe thérapeutique avec
        des supervisions sur le plan clinique ou dans le cadre des expertises.
        Le pédopsychiatre est un psychiatre spécialisé pour les enfants.
      </MobileTabItem>
    </ul>
  </div>
);

const MobileTabItem = ({ title, activeTab, tabKey, clicked, children }) => (
  <li className={classes.MobileTabWrapper}>
    <div className={classes.MobileTabTitle} data-tab={tabKey} onClick={clicked}>
      {title}
    </div>
    {activeTab === tabKey && (
      <div className={classes.MobileTabContent}>{children}</div>
    )}
  </li>
);

const DeskTopTab = ({ activeTab, clicked }) => (
  <div>
    <ul
      style={{
        listStyleType: "none",
        margin: 0,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <DeskTopTabItem
        title="Psychothérapeute"
        activeTab={activeTab}
        tabKey="tab1"
        clicked={clicked}
      />
      <DeskTopTabItem
        title="Psychologue"
        activeTab={activeTab}
        tabKey="tab2"
        clicked={clicked}
      />
      <DeskTopTabItem
        title="Neuropsychologue"
        activeTab={activeTab}
        tabKey="tab3"
        clicked={clicked}
      />
      <DeskTopTabItem
        title="Médecine du sommeil"
        activeTab={activeTab}
        tabKey="tab4"
        clicked={clicked}
      />
      <DeskTopTabItem
        title="Psychiatre et pédopsychiatre"
        activeTab={activeTab}
        tabKey="tab5"
        clicked={clicked}
      />
    </ul>
    <div>
      <TabContent activeTab={activeTab} />
    </div>
  </div>
);

const DeskTopTabItem = ({ title, activeTab, tabKey, clicked }) => (
  <li
    data-tab={tabKey}
    className={
      activeTab === tabKey
        ? [classes.TabItemList, classes.Active].join(" ")
        : classes.TabItemList
    }
    onClick={clicked}
  >
    {title}
  </li>
);

const TabContent = ({ activeTab }) => {
  let content = null;
  if (activeTab === "tab1") {
    content =
      "Formé à une technique de thérapie particulière, le psychothérapeute a des aptitudes de suivi psychologique et travaille plus en profondeur avec le patient. La psychothérapie est donc de moyen à long terme.";
  }
  if (activeTab === "tab2") {
    content =
      "Un psychologue a une formation similaire à un psychothérapeute, mais détient également un diplôme en psychologie.";
  }
  if (activeTab === "tab3") {
    content =
      "Un neuropsychologue est un psychologue spécialisé dans la compréhension de la relation entre le cerveau physique et le comportement. Les troubles dans le cerveau et le système nerveux peuvent modifier le comportement et la fonction cognitive. Donc les prestations d&apos;un neuropsychologue sont principalement axées dans les domaines de la neuropsychologie cognitive et de la neuro-réhabilitation.";
  }
  if (activeTab === "tab4") {
    content =
      "La médecine du sommeil est un domaine médical consacré aux troubles du sommeil. Les spécialistes proposent une approche diagnostique et thérapeutique adaptée aux pathologies (insomnies, ronflements, narcolepsie, apnées du sommeil, somnambulisme, décalages horaires, etc.)";
  }
  if (activeTab === "tab5") {
    content =
      "Le psychiatre assure le diagnostic, la prescription des médicaments en cas de besoin, ainsi que le suivi médical. Il est le responsable de toutes les prises en charge et encadre l&apos;équipe thérapeutique avec des supervisions sur le plan clinique ou dans le cadre des expertises. Le pédopsychiatre est un psychiatre spécialisé pour les enfants.";
  }

  return (
    <div style={{ padding: 20, backgroundColor: "#1689DF", color: "#fff" }}>
      {content}
    </div>
  );
};
