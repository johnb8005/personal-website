import React from "../_snowpack/pkg/react.js";
const sanitize = (e) => e.replace(/@/g, " [@] ");
const toHref = (e) => `mailto:${e}`;
export const Email = ({email}) => /* @__PURE__ */ React.createElement("a", {
  href: toHref(email)
}, sanitize(email));
export default Email;
