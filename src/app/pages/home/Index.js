import React from "react";
import ReactHome from "../../../components/react-home/ReactHome";
import Navbar from "../../common/navbar/Navbar";

const Index = () => {
  return (
    <div>
      <header>
        <Navbar link={"/login"} text={"Login"} />
      </header>
      <ReactHome
        navHeight={"58px"}
        title={"React Login App Using OAuth2 & JWT"}
        link={"Login"}
        route={"/login"}
      />
    </div>
  );
};

export default Index;
