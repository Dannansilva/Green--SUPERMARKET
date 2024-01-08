import React from "react";
import dynamic from "next/dynamic";
import Accountsettings from "../../../components/settings page/accountsettings";
import Billinginfo from "../../../components/settings page/billinginfo";
import Updatepassword from "../../../components/settings page/updatepassword"
import Container from "../../../components/container/container";
import { LiaHomeSolid } from "react-icons/lia";


const NavigationPopup = dynamic(
  () => import("../../../components/settings page/navigationpopup"),
  { ssr: false }
);

function Page() {
  const navItems = [{ home: "Home", path: "/" }];

  return (
    <div>
      <Container>
        <NavigationPopup />
        <Accountsettings />
        <Billinginfo /> 
        <Updatepassword />
      </Container>
    </div>
  );
}

export default Page;
