import React from "../_snowpack/pkg/react.js";
const Header = ({
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
export default Header;
