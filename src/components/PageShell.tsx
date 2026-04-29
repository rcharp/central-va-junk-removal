import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface PageShellProps {
  children: ReactNode;
  /** When true, page renders against a dark hero background under the header */
  heroDark?: boolean;
}

const PageShell = ({ children }: PageShellProps) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <Header />
      <main className="pt-[200px] lg:pt-[290px]">{children}</main>
      <Footer />
    </div>
  );
};

export default PageShell;
