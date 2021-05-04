import React from "./_snowpack/pkg/react.js";
import * as Data from "./data.js";
import UI from "./ui/index.js";
function App() {
  try {
    const data = Data.getDataFromParam();
    return /* @__PURE__ */ React.createElement(UI, {
      data
    });
  } catch (err) {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("i", null, "An error occurred")), /* @__PURE__ */ React.createElement("small", null, /* @__PURE__ */ React.createElement("pre", null, err.message)));
  }
}
export default App;
