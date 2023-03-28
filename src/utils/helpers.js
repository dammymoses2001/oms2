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