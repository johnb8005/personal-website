import React from "../../_snowpack/pkg/react.js";
import * as U from "./utils.js";
export const Phone = ({
  phone,
  telegram
}) => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("a", {
    href: U.toHref(phone)
  }, phone), " ", /* @__PURE__ */ React.createElement("a", {
    href: U.toWhatsapp(phone)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fab fa-whatsapp"
  })), " ", telegram && /* @__PURE__ */ React.createElement("a", {
    href: U.toTelegram(telegram)
  }, /* @__PURE__ */ React.createElement("i", {
    className: "fab fa-telegram"
  })));
};
export default Phone;
