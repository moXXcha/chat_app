export const isAuthenticated = () => {
  return document.cookie.includes("session=");
};
