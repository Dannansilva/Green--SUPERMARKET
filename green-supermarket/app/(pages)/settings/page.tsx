import React from "react";
import dynamic from "next/dynamic";
import Accountsettings from "../../../components/settings page/accountsettings";
import Billinginfo from "../../../components/settings page/billinginfo";
import Container from "../../../components/container/container";

const NavigationPopup = dynamic(
  () => import("../../../components/settings page/navigationpopup"),
  { ssr: false }
);

function Page() {
  return (
    <div>
      <Container>
        <NavigationPopup />
        <Accountsettings />
        <Billinginfo /> 
      </Container>
    </div>
  );
}

export default Page;
