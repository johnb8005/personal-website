export interface Data {
  name: string;
  title: string;
  phone: string;
  telegram?: string;
  picture: { src: string };
  email: string;
  links: { href: string; icon: string; name: string }[];
  linksFooter: { href: string; icon: string }[];
}
