
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-support-17",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Your Quests",
    icon: "nc-icon nc-single-02",
    component: Icons,
    layout: "/admin",
  },
];
export default routes;
