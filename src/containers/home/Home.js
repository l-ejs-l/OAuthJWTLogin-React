import React from "react";
import ReactHome from "../../components/react-home/ReactHome";
import Header from "../../components/header/Header";

const Home = () => {
  return (
    <div>
      <Header link={"/login"} text={"Login"} />
      <ReactHome
        navHeight={"58px"}
        title={"React Login App Using OAuth2 & JWT"}
        link={"Login"}
        route={"/login"}
      />
    </div>
  );
};

export default Home;
