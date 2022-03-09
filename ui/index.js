import React from "../_snowpack/pkg/react.js";
import Header from "./header.js";
import Footer from "./footer.js";
import Phone from "./phone/index.js";
import Email from "./email.js";
const UIMain = ({data}) => {
  document.title = data.name;
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", {
    id: "main"
  }, /* @__PURE__ */ React.createElement(Header, {
    name: data.name,
    title: data.title,
    picture: data.picture
  }), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("ul", {
    className: "icons"
  }, data.links.map((l, i) => /* @__PURE__ */ React.createElement("li", {
    key: i
  }, /* @__PURE__ */ React.createElement("a", {
    href: l.href,
    className: `icon ${l.icon}`
  }, l.name))))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Phone, {
    phone: data.phone,
    telegram: data.telegram
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Email, {
    email: data.email
  }), /* @__PURE__ */ React.createElement("br", null), data.linksFooter.map((f, i) => /* @__PURE__ */ React.createElement("span", {
    key: i
  }, /* @__PURE__ */ React.createElement("a", {
    href: f.href
  }, /* @__PURE__ */ React.createElement("i", {
    className: `icon ${f.icon}`
  })), i < data.linksFooter.length - 1 && " | ")))), /* @__PURE__ */ React.createElement(Footer, {
    name: data.name
  }));
};
export default UIMain;
