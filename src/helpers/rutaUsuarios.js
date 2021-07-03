import axios from "axios";
import qs from "qs";

export const postLogin = async (datos) => {
  const url = `https://secret-sierra-67809.herokuapp.com/login`;

  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify(datos),
  };
  try {
    const resp = await axios(url, options);
    const { data } = resp;

    return {
      data: data,
      loading: false,
    };
  } catch (error) {
    return {
      data: error.response.data,
      loading: false,
    };
  }
};
