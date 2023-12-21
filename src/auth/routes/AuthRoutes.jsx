import { Navigate } from "react-router-dom";
import { LoginPage } from "../pages";
import { RegisterPage } from "../pages";

export const AuthRoutes = [
    {
      index: true,
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "register",
      element: <RegisterPage />,
    },
    {
      path: "/auth/*",
      element: <Navigate to={"auth/login"} />,
    },
  ];