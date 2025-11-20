import { RouterProvider } from "react-router";
import { router } from "./router";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "../model/store";

export function AppProviders() {
  return (
    <>
      <Provider store={store}>
        <Suspense fallback={<div>Загрузка...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </Provider>

      {/* <Modal /> */}
    </>
  );
}
