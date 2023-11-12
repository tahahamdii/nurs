import React from "react";
import "./contact.css";
import img from "../../assets/3D.png"

export const Contact = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="text-wrapper">NursyAi</div>
        <div className="overlap">
          <div className="rectangle" />
          <div className="nav">
            <div className="text-wrapper-2">Acceuil</div>
            <div className="text-wrapper-3">Fonctionnalité</div>
            <div className="text-wrapper-4">Contactez Nous</div>
          </div>
        </div>
        <img className="design-sans-titre" alt="Design sans titre" src="design-sans-titre-3-1.png" />
        <div className="overlap-group">
          <div className="group">
            <div className="overlap-group-2">
              <img className="vector" alt="Vector" src="vector.svg" />
              <img className="img" alt="Vector" src="image.svg" />
              <img className="vector-2" alt="Vector" src="vector-2.svg" />
              <div className="rectangle-2" />
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="text-wrapper-5">Prénom* :</div>
              <div className="text-wrapper-6">Nom* :</div>
              <p className="en-soumettant-mes">En soumettant mes données j&#39;accepte d&#39;être recontacté</p>
              <img className="rectangle-3" alt="Rectangle" src="rectangle-31.svg" />
              <div className="rectangle-4" />
              <div className="text-wrapper-7">Description* :</div>
              <div className="rectangle-5" />
              <div className="rectangle-6" />
              <div className="overlap-group-wrapper">
                <div className="div-wrapper">
                  <div className="text-wrapper-8">Envoi</div>
                </div>
              </div>
            </div>
          </div>
          <p className="p">© Copyright 2023 | NursyAI | All Rights Reserved |</p>
          <img
            className="element-business-doctor"
            alt="Element business doctor"
            src={img}
          />
        </div>
        <p className="nous-somme-a-votre">
          Nous Somme&nbsp;&nbsp;A Votre Service
          <br />A Tous Moment !
        </p>
      </div>
    </div>
  );
};
