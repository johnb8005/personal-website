import React from "react";

import * as Data from "./data";
import UI from "./ui";

function App() {
  try {
    const data = Data.getDataFromParam();
    return <UI data={data} />;
  } catch (err) {
    return (
      <>
        <p>
          <i>An error occurred</i>
        </p>

        <small>
          <pre>{err.message}</pre>
        </small>
      </>
    );
  }
}

export default App;
