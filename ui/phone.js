import React from "../_snowpack/pkg/react.js";
const sanitize = (p) => p.replace(/[^0-9+]/g, "");
const toHref = (phone) => `tel:${sanitize(phone)}`;
const toWhatsapp = (phone) => `https://wa.me/${sanitize(phone)}`;
export const Phone = ({phone}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    href: toHref(phone)
  }, phone), " ", /* @__PURE__ */ React.createElement("a", {
    href: toWhatsapp(phone)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fab fa-whatsapp"
  })));
};
export default Phone;
