import {  useState } from "react";
import Router from "./router/Router";
import PublicRoutes from "./router/routes/PublicRoutes";

export default function App() {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes]);

  // console.log(allRoutes);
  return <Router allRoutes={allRoutes} />;


 
}
