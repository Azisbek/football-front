import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";
import { ROUTE } from "@/shared/constant/path";

const Home = lazy(() => import("@pages/home"));
const PlacesPage = lazy(() => import("@pages/places-page"));
const SignIn = lazy(() => import("@pages/sign-in"));

export const router = createBrowserRouter([
  {
    path: ROUTE.base,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ROUTE.places,
        element: <PlacesPage />,
      },
      {
        path: ROUTE.signIn,
        element: <SignIn />,
      },
    ],
  },
]);
