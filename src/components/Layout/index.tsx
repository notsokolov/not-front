import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface Props {
  children: React.ReactNode;
}

export function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="px-4 pt-24 pb-20 lg:px-0">{children}</div>
      <Footer />
    </>
  );
}
