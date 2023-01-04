import axios from "axios";

export const getLocationDetails = (params) => {
  const API = "https://api.openweathermap.org/data/2.5/forecast";
  return axios.get(API, { params });
};

export const getCountryList = async (searchKey) => {
  let API = "https://restcountries.com/v3.1/";
  if (searchKey) {
    API = API + `name/${searchKey}`;
  } else {
    API = API + "all";
  }

  return await axios.get(API);
};
