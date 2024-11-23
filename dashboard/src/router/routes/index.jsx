// import { lazy } from "react";

// const MainLayout = lazy(() => import("../../layout/MainLayout"));
import MainLayout from "../../layout/MainLayout";

import { privateRoutes } from "./privateRoutes";

export const getRoutes = () => {
  return {
    path: "/",
    element: <MainLayout />,
    children: privateRoutes,
  };
};
