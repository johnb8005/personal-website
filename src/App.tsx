import React from "react";

import data from "./data";
import * as UI from "./ui-utils";

function App() {
  return (
    <>
      <section id="main">
        <UI.Header name={data.name} title={data.title} picture={data.picture} />
        <footer>
          <ul className="icons">
            {data.links.map((l, i) => (
              <li key={i}>
                <a href={l.href} className={`icon ${l.icon}`}>
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </footer>

        <p>
          <UI.Phone phone={data.phone} />
          <br />
          <UI.Email email={data.email} />
          <br />

          {data.linksFooter.map((f, i) => (
            <span key={i}>
              <a href={f.href}>
                <i className={`icon ${f.icon}`}></i>
              </a>
              {i < data.linksFooter.length - 1 && " | "}
            </span>
          ))}
        </p>
      </section>

      <UI.Footer name={data.name} />
    </>
  );
}

export default App;
