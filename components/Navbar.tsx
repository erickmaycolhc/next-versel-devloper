//import { ActiveLink } from "./ActiveLink";

import { ActiveLink } from "./ActiveLink";

type TypeMenuItems = {
  text: string;
  href: string;
};

export const menuItems: TypeMenuItems[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export default function Navbar() {
  return (
    <nav className={"menu-container colordefault"}>
      {menuItems.map(({ text, href }) => (
        <ActiveLink key={href} text={text} href={href} />
      ))}
      {/* <ActiveLink text="Home" href="/" />
      <ActiveLink text="About" href="about" />
      <ActiveLink text="Contact" href="/contact" />
      <ActiveLink text="Pricing" href="/pricing" /> */}
    </nav>
  );
}
