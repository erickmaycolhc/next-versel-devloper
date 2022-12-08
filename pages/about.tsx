import Link from "next/link";
import { DarkLayouts } from "../components/layouts/DarKLayouts";
import { MainLayouts } from "../components/layouts/MainLayouts";

export default function AboutPage() {
  return (
    <>
      <h1 className={"title"}>
        {/* Ir a <a href="/">ZzZz</a> */}
        Ir a <Link href="/">About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.tsx</code>
      </p>
    </>
  );
}
AboutPage.getLayout = function getLayout(page: any) {
  return (
    <MainLayouts>
      <DarkLayouts>{page}</DarkLayouts>
    </MainLayouts>
  );
};
