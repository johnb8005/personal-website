import React from "react";

export const Header = ({
  name,
  title,
  picture,
}: {
  name: string;
  title: string;
  picture: { src: string };
}) => {
  return (
    <header>
      <span className="avatar">
        <img src={picture.src} alt={name} />
      </span>
      <h1>{name}</h1>
      <p>{title}</p>
    </header>
  );
};

export const Footer = ({ name }: { name: string }) => {
  return (
    <footer id="footer">
      <ul className="copyright">
        <li>&copy; {name}</li>
      </ul>
      <ul className="copyright">
        <li>
          Source:{" "}
          <a href="https://github.com/johnb8005/personal-website">
            <i className="icon solid fa-code"></i>
          </a>
        </li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
};
