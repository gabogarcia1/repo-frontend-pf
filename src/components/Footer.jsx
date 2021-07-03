import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div class="container-fluid pb-0 mb-0 justify-content-center text-light ">
        <footer>
          <div class="row my-5 justify-content-center py-5">
            <div class="col-11">
              <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-12 my-auto mx-auto a">
                  <h3 class="mb-md-0 mb-5 footer-title">Tonin HighSchool</h3>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 bold-text ">
                    <b>Funciones</b>
                  </h6>
                  <ul class="list-unstyled">
                    <li>
                      <Link to="/alumnos" className="pb-1">
                        Lista alumnos
                      </Link>
                    </li>
                    <li>
                      <Link to="/alumnos" className="pb-1">
                        Agregar docente
                      </Link>
                    </li>
                    <li>
                      <Link to="/alumnos" className="pb-1">
                        Agregar alumno
                      </Link>
                    </li>
                  </ul>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-12">
                  <h6 class="mb-3 mb-lg-4 text-muted bold-text mt-sm-0 mt-5">
                    <b>Direccion institucional</b>
                  </h6>
                  <a
                    class="mb-1"
                    href="https://www.google.com.ar/maps/place/RollingCode+School/@-26.8366961,-65.2093905,17z/data=!3m1!4b1!4m5!3m4!1s0x94225d3ad7f30f1d:0xf8606cd659b8e3e4!8m2!3d-26.8367097!4d-65.2072045"
                  >
                    {" "}
                    Gral. Paz 576
                  </a>
                  <p>San Miguel de Tucumán, Tucumán</p>
                </div>
              </div>
              <div class="row ">
                <div class="col-xl-8 col-md-4 col-sm-4 col-auto my-md-0 mt-5 order-sm-1 order-3 align-self-end">
                  <p class="social text-muted mb-0 pb-0 bold-text">
                    {" "}
                    <span class="mx-2">
                      <a href="https://es-la.facebook.com/RollingCodeSchool/">
                        <i class="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </span>{" "}
                    <span class="mx-2">
                      <a href="https://twitter.com/rollingcodeok">
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </span>{" "}
                    <span class="mx-2">
                      <a href="https://www.instagram.com/rollingcodeschool/?hl=es-la">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </span>{" "}
                  </p>
                  <small class="rights">
                    <span>&#174;</span> Rolling Code todos los derechos
                    reservados.
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-1 align-self-end ">
                  <h6 class="mt-55 mt-2 text-muted bold-text">
                    <b>Correo instintucional</b>
                  </h6>
                  <small>
                    {" "}
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    toninhighschool@gmail.com
                  </small>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-4 col-auto order-2 align-self-end mt-3 ">
                  <h6 class="text-muted bold-text">
                    <b>Correo director de la institucion</b>
                  </h6>
                  <small>
                    <span>
                      <i class="fa fa-envelope" aria-hidden="true"></i>
                    </span>{" "}
                    FabricioTonin@gmail.com
                  </small>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
