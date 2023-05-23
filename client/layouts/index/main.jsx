import { Fragment } from "react";

import Header from "./ui/header";
import Footer from "./ui/footer";

const Index = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Index;
