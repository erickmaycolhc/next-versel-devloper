import Link from "next/link";
import React from "react";

type NavItemPropsWithComponent = {
  href: string;
  text: string;
};
// export default function ActiveLink({ href, text }: NavItemPropsWithComponent) {
//   return <Link href={href}>{text}</Link>;
// }
export const ActiveLink = ({ href, text }: NavItemPropsWithComponent) => {
  return <Link href={href}>{text}</Link>;
};
