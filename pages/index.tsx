import Link from "next/link";
import { MainLayouts } from "../components/layouts/MainLayouts";

export default function HomePage() {
  return (
    <MainLayouts>
      <h1 className={"title"}>
        {/* Ir a <a href="/">ZzZz</a> */}
        Ir a <Link href="/">ZzZz</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.tsx</code>
      </p>
    </MainLayouts>
  );
}
