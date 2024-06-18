import React, { Component } from "react";
import Slider from "react-slick";
import "./carousel.scss";
// import Avatar from "/images/account-circle.svg";
import Image from "next/image";

const AvatarImage = ({ alt }) => (
  <Image
    src="/images/account-circle.svg"
    alt={alt}
    width={44}
    height={34}
    style={{ marginRight: 6, marginBottom: 0 }}
  />
);

const TestimonialItem1 = () => (
  <div style={{ padding: "20px 20px 10px" }}>
    <em>
      Très impressionné par ce service. Le psychothérapeute écoute attentivement
      et répond avec clarté, expérience et calme. Pour moi, la connexion a été
      immédiate et relaxante pendant une période difficile. Merci beaucoup !!
    </em>
    <div style={{ padding: "20px 0 0", display: "flex", alignItems: "center" }}>
      <AvatarImage alt="Photo de Matt Gervais" /> Matt Gervais, Rockland
    </div>
  </div>
);

const TestimonialItem2 = () => (
  <div style={{ padding: "20px 20px 10px" }}>
    <em>
      Je ne serais pas ici sans l&apos;aide et les conseils constants du CPM.
      Merci !
    </em>
    <div style={{ padding: "20px 0 0", display: "flex", alignItems: "center" }}>
      <AvatarImage alt="Avis de Audrey Pirker, photo" /> Audrey Pirker, Ottawa
    </div>
  </div>
);

const TestimonialItem3 = () => (
  <div style={{ padding: "20px 20px 10px" }}>
    <em>
      J&apos;aime le CPM. J&apos;y ai trouvé un excellent praticien, très
      compétent dans son domaine. Elle était patiente et extrêmement gentille.
      Je lui attribue ses observations très pointues de mes problèmes dans le
      temps relativement limité que nous avons passé ensemble. Dans
      l&apos;ensemble, y aller a été une bonne décision.
    </em>
    <div style={{ padding: "20px 0 0", display: "flex", alignItems: "center" }}>
      <AvatarImage alt="Photo de David Schmid" /> David Schmid, Ottawa
    </div>
  </div>
);

const TestimonialItem4 = () => (
  <div style={{ padding: "20px 20px 10px" }}>
    <em>
      Je les ai trouvés très soutenants à un moment où je sentais que tout le
      monde était contre moi. Y aller a été extrêmement utile et j&apos;apprécie
      que mon thérapeute ait remis en question mes pensées négatives sur
      moi-même.
    </em>
    <div style={{ padding: "20px 0 0", display: "flex", alignItems: "center" }}>
      <AvatarImage alt="Photo de Jennifer Ballard" /> Jennifer Ballard, Ottawa
    </div>
  </div>
);

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 7000,
      dotsClass: "slick-dots",
    };
    return (
      <Slider {...settings}>
        <div>
          <TestimonialItem1 />
        </div>
        <div>
          <TestimonialItem2 />
        </div>
        <div>
          <TestimonialItem3 />
        </div>
        <div>
          <TestimonialItem4 />
        </div>
      </Slider>
    );
  }
}

export default class Carousel extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#1689DF", color: "#fff" }}>
        <div
          style={{ maxWidth: 1170, padding: "20px 20px 40px", margin: "auto" }}
        >
          <SimpleSlider />
        </div>
      </div>
    );
  }
}
