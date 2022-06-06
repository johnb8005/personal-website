import * as T from "./type";

const isData = (d: any): d is T.Data => typeof d === "object";
/**
 * this translates the Data object into a bas64 string that can then easily be transported via url
 * @param d: data object
 */
export const toParam = (d: T.Data) => btoa(JSON.stringify(d));

const sanitizeParam = (p: string) => {
  // if ends with trailing slash, remove it
  if (p[p.length - 1] === "/") {
    return p.slice(0, -1);
  }

  return p;
};

export const getDataFromParam = (): T.Data => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get("data");

  if (!myParam) {
    throw Error("param could not be found");
  }

  const d = JSON.parse(atob(sanitizeParam(myParam)));

  console.log(typeof d);

  if (!isData(d)) {
    throw Error("param could not be read");
  }

  return d;
};
