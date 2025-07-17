import React from "react";
import Container from "../container/Container";
import Header from "../Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;
