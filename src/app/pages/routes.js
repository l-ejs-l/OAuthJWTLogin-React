import Index from "./home/Index";
import Login from "./login/Login";
import Welcome from "./welcome/Welcome";

const routes = [
  {
    exact: true,
    path: "/",
    scope: "public",
    component: Index
  },
  {
    exact: true,
    path: "/login",
    scope: "public",
    component: Login
  },
  {
    exact: true,
    path: "/home",
    scope: "private",
    component: Welcome
  }
];

export default routes;
