import React from "react";
import * as C from "../config";

const Footer = ({ name }: { name: string }) => (
  <footer id="footer">
    <ul className="copyright">
      <li>&copy; {name}</li>
    </ul>
    <ul className="copyright">
      <li>
        Source:{" "}
        <a href={C.ghUrl}>
          <i className="icon solid fa-code"></i>
        </a>
        &nbsp;
        <small>
          <a href={C.github.version}>{C.version}</a>
        </small>
      </li>
      <li>
        Design: <a href="http://html5up.net">HTML5 UP</a>
      </li>
    </ul>
  </footer>
);

export default Footer;
