import { lazy } from "react";
const AdminLogin = lazy(() => import('../../views/auth/AdminLogin'));
const Register = lazy(() => import('../../views/auth/Register'));
const Login = lazy(() => import('../../views/auth/Login'));

// import Register from "../../views/auth/Register";
// import Login from "../../views/auth/Login";

const PublicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default PublicRoutes;

