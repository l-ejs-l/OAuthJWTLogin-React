import Navbar from "../../common/navbar/Navbar";
import ReactHome from "../../../components/react-home/ReactHome";
import React from "react";

export const IndexView = () => {
  return <div>
    <header>
      <Navbar link={"/login"} text={"Login"}/>
    </header>
    <ReactHome
      navHeight={"58px"}
      title={"React Login App Using OAuth2 & JWT"}
      link={"Login"}
      route={"/login"}
    />
  </div>;
};