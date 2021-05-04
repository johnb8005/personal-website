import React from "../_snowpack/pkg/react.js";
export const Header = ({
  name,
  title,
  picture
}) => {
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("span", {
    className: "avatar"
  }, /* @__PURE__ */ React.createElement("img", {
    src: picture.src,
    alt: name
  })), /* @__PURE__ */ React.createElement("h1", null, name), /* @__PURE__ */ React.createElement("p", null, title));
};
export const Footer = ({name}) => {
  return /* @__PURE__ */ React.createElement("footer", {
    id: "footer"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "copyright"
  }, /* @__PURE__ */ React.createElement("li", null, "© ", name)), /* @__PURE__ */ React.createElement("ul", {
    className: "copyright"
  }, /* @__PURE__ */ React.createElement("li", null, "Design: ", /* @__PURE__ */ React.createElement("a", {
    href: "http://html5up.net"
  }, "HTML5 UP"))));
};