import Home from "../containers/home/Home";
import Login from "../containers/login/Login";

const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    exact: true,
    path: "/login",
    component: Login
  }
];

export default routes;
