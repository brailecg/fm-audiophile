import React from "react";
import { Container } from "./Container";

const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-black">
      <Container
        className="text-app-h4 text-center py-8 md:text-app-h2 md:py-24"
        classNameInner=" text-white">
        {children}
      </Container>
    </div>
  );
};

export default PageHeader;
