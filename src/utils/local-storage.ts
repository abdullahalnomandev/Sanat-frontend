export const getFromLocalStorage = (key: string) => {
  if(!key || typeof window === 'undefined') return "";
  return sessionStorage.getItem(key);
};

export const setToLocalStorage = (key: string, value: string) => {
  if(!key ||  typeof window === 'undefined') return "";
  return sessionStorage.setItem(key, value);
};