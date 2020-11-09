import * as T from "./type";

const linksFooter = [
  { href: "https://twitter.com/Nexys_ch", icon: "brands fa-twitter" },
  { href: "http://nexys.io", icon: "solid fa-briefcase" },
];

const links = [
  {
    name: "Calendly",
    href: "https://calendly.com/johanbd/meeting",
    icon: "solid fa-calendar-week",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/johanboissard/",
    icon: "brands fa-linkedin-in",
  },
  {
    name: "Github",
    href: "https://github.com/johnb8005",
    icon: "solid brands fa-github",
  },
];

const data: T.Data = {
  name: "Johan Boissard",
  title: "IT Architect & Founder @ Nexys",
  picture: { src: "/images/jb.jpeg" },
  phone: "+41 79 762 68 65",
  email: "johan@nexys.ch",
  links,
  linksFooter,
};

export default data;
