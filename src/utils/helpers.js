export const getAuthToken = () => {
    return localStorage.getItem("useroms:token");
};

export const setAuthToken = (token) =>
    localStorage.setItem("useroms:token", token);

export const setLocationHistory = (location) =>
    sessionStorage.setItem("user:redirect:location", JSON.stringify(location));

export const getLocationHistory = () => {
    return JSON.parse(sessionStorage.getItem("user:redirect:location"));
};
