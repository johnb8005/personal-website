import React from "react";

const Header = ({
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

export default Header;
