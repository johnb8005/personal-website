import React from "../_snowpack/pkg/react.js";
import * as C from "../config.js";
const Footer = ({name}) => /* @__PURE__ */ React.createElement("footer", {
  id: "footer"
}, /* @__PURE__ */ React.createElement("ul", {
  className: "copyright"
}, /* @__PURE__ */ React.createElement("li", null, "© ", name)), /* @__PURE__ */ React.createElement("ul", {
  className: "copyright"
}, /* @__PURE__ */ React.createElement("li", null, "Source:", " ", /* @__PURE__ */ React.createElement("a", {
  href: C.ghUrl
}, /* @__PURE__ */ React.createElement("i", {
  className: "icon solid fa-code"
})), " ", /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("a", {
  href: C.github.version
}, C.version))), /* @__PURE__ */ React.createElement("li", null, "Design: ", /* @__PURE__ */ React.createElement("a", {
  href: "http://html5up.net"
}, "HTML5 UP"))));
export default Footer;
