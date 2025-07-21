import { lazy } from "react";
import { createBrowserRouter } from "react-router";

const Home = lazy(() => import("@pages/home"));
const SignIn = lazy(() => import("@pages/sign-in"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);
