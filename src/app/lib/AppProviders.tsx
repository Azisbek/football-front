import { RouterProvider } from "react-router";
import { router } from "./router";
import { Layout } from "@app/layout";

export function AppProviders() {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
      {/* <Modal /> */}
    </>
  );
}
