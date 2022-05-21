export const getLocaleUser = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
}