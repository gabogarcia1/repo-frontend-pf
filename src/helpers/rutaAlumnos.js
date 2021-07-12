import axios from "axios";
import qs from "qs";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7InJvbGUiOiJVU0VSX1JPTEUiLCJpbnN0aXR1Y2lvbiI6IlRvbmluIEhpZ2ggc2Nob29sIiwiZGlyZWNjaW9uIjoiR2VuZXJhbCBwYXogODgwIiwiZXN0YWRvIjp0cnVlLCJfaWQiOiI2MGVjMzg3NmFhZWY2ZTAyZWE3NzE5ZTEiLCJub21icmUiOiJQYWJsbyIsImFwZWxsaWRvIjoiTWFyaW5vIiwidGVsZWZvbm8iOjExMTExMTExMTExLCJlbWFpbCI6InBtYXJpbm9AZ21haWwuY29tIiwiY3JlYXRlZEF0IjoiMjAyMS0wNy0xMlQxMjo0MToyNi45OTRaIiwidXBkYXRlZEF0IjoiMjAyMS0wNy0xMlQxMjo0MToyNi45OTRaIiwiX192IjowfSwiaWF0IjoxNjI2MDkzNzA2LCJleHAiOjE2MjYyNjY1MDZ9.3SOaR-KjiIp1MdljuY1eUAcCIyqgUCZrqBRdBSuCq2k";

const urlLocal = "http://localhost:3005";
//Traer todos los cursos con el limite y desde que registro
export const getAlumnos = async (desde = 0, limite = 10) => {
  // const token = JSON.parse(localStorage.getItem("token")) || "";
  // let url = `https://secret-sierra-67809.herokuapp.com/alumno`;
  let url = `${urlLocal}/alumno`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      token: token,
    },
  };
  try {
    const resp = await axios(url, options);
    const data = resp.data.alumnos;

    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Traer un curso según su id
export const getAlumnoId = async (id) => {
  // let url = `https://secret-sierra-67809.herokuapp.com/alumno/${id}`;
  let url = `${urlLocal}/alumno/${id}`;
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
    },
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Crear nuevo alumno
export const addAlumno = async (datos) => {
  console.log(datos);
  // const token = JSON.parse(localStorage.getItem("token")) || "";
  // let url = "https://secret-sierra-67809.herokuapp.com/alumno";
  let url = `${urlLocal}/alumno`;

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      token: token,
    },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Actualizar curso
export const modifAlumno = async (datos, id) => {
  console.log(datos);
  // const token = JSON.parse(localStorage.getItem("token")) || "";
  // let url = `https://secret-sierra-67809.herokuapp.com/alumno/${id}`;
  let url = `${urlLocal}/alumno/${id}`;

  const options = {
    method: "PUT",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      token: token,
    },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};

//Inactivar un curso
export const delAlumno = async (id) => {
  // const token = JSON.parse(localStorage.getItem("token")) || "";
  // let url = `https://secret-sierra-67809.herokuapp.com/alumno/${id}`;
  let url = `${urlLocal}/alumno/${id}`;

  const options = {
    method: "DELETE",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      token: token,
    },
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return {
      data: error.response.data,
      loading: false,
    };
  }
};
