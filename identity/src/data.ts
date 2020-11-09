import * as T from "./type";

const isData = (d: any): d is T.Data => {
  return true;
};

/**
 * this translates the Data object into a bas64 string that can then easily be transported via url
 * @param d: data object
 */
export const toParam = (d: T.Data) => btoa(JSON.stringify(d));

const getDataFromParam = (): T.Data => {
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

export default getDataFromParam();
