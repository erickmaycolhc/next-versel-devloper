import Link from "next/link";
import { MainLayouts } from "../../components/layouts/MainLayouts";

export default function ContactPage() {
  return (
    <MainLayouts>
      <h1 className={"title"}>
        {/* Ir a <a href="/">ZzZz</a> */}
        Ir a <Link href="/">Contact</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/Contact.tsx</code>
      </p>
    </MainLayouts>
  );
}
