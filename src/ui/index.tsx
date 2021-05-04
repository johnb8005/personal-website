import React from "react";

import * as T from "../type";
import * as UI from "./ui-utils";
import Phone from "./phone";
import Email from "./email";

const UIMain = ({ data }: { data: T.Data }) => {
  document.title = data.name;
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
          <Phone phone={data.phone} />
          <br />
          <Email email={data.email} />
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
};

export default UIMain;
