import React from "react";
import { Container } from "./Container";

const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black">
      <Container className=" text-white text-center text-app-h4 md:text-app-h2 py-8 md:py-24 ">
        {children}
      </Container>
    </div>
  );
};

export default PageHeader;
