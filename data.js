const isData = (d) => {
  return true;
};
export const toParam = (d) => btoa(JSON.stringify(d));
export const getDataFromParam = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("data");
  if (!myParam) {
    throw Error("param could not be found");
  }
  const d = JSON.parse(atob(myParam));
  if (!isData(d)) {
    throw Error("param could not be read");
  }
  return d;
};
