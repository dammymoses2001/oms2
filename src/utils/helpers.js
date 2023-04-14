// const BigInt = require("bigint");

export const getAuthToken = () => {
    return localStorage.getItem("useroms:token");
};

export const setAuthToken = (token) => {
    localStorage.setItem("useroms:token", token);
};

export const setLocationHistory = (location) =>
    sessionStorage.setItem("user:redirect:location", JSON.stringify(location));

export const getLocationHistory = () => {
    return JSON.parse(sessionStorage.getItem("user:redirect:location"));
};


export const Months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export const getYear = () =>{
    const currentYear = new Date().getFullYear();
const years = [];

for (let year = 2022; year <= currentYear; year++) {
  years.push(year);
}

return years;
}


export function formatNumber(number) {
  const billion = 1000000000;
  const million = 1000000;
  const thousand = 1000;

  if (number >= billion) {
    return (number / billion).toFixed(1) + "b";
  } else if (number >= million) {
    return (number / million).toFixed(1) + "m";
  } else if (number >= thousand) {
    return (number / thousand).toFixed(1) + "k";
  } else {
    return number.toString();
  }
   
  }


  export const convertDate = (dateString) =>{
    // const dateString = '2023-04-02T00:00:00.000Z';
    const date = new Date(dateString);

const isoDateString = date.toISOString();
const formattedDate = isoDateString.substr(0, 10);

// alert(formattedDate);
return formattedDate;
  }