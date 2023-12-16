import React from "react";
import Container from "../../../components/container/container";
import Leftpopup from "../../../components/contact us/leftpopup";
import Rightpopup from "../../../components/contact us/rightpopup";

const contactus = () => {
  return (
    <Container>
      <div className=" md:flex">
      <div className=" md:flex-grow">
          <Leftpopup />
      </div>
      <div className=" md:flex-grow">
          <Rightpopup />
      </div>
    </div>
    </Container>
  );
};

export default contactus;
