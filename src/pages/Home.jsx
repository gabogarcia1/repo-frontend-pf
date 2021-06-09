import React from "react";
// import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Container, Row, Card, Col } from "react-bootstrap";

import "../css/home.css";
const Home = () => {
  return (
    <>
      <div className="container home-container">
        <div className="row">
          <div className="col">
            <div className="card home-card ">
              <div className="card-body">
                <p className="text-center"> Home </p>
              </div>
              <img
                className="logoCampus"
                src="https://trello-attachments.s3.amazonaws.com/60baa0503098946317320254/600x360/3ee8a7711faa4e6b0c318b78a0b4ec8a/image.png"
                alt="portada"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card container mt-4">
        <div className="card-body info">
          <div className="card tarjeta col-sm col-lg-6">
            <div className="card-title    text-center">
              <h5>Datos de contacto</h5>
            </div>
            <div className="card-body">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                itaque fugit distinctio maiores aspernatur, saepe enim. Sapiente
                officiis esse laborum. Beatae deserunt debitis voluptas laborum
                delectus saepe error iusto iure!
              </p>
            </div>
          </div>
          <div className="card tarjeta col-sm col-lg-6">
            <div className="card-title    text-center ">
              <h5>Informacion Institucional</h5>
            </div>
            <div className="card-body">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                itaque fugit distinctio maiores aspernatur, saepe enim. Sapiente
                officiis esse laborum. Beatae deserunt debitis voluptas laborum
                delectus saepe error iusto iure!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
