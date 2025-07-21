import { createRoot } from "react-dom/client";
import { AppProviders } from "./lib/AppProviders.tsx";
import "@shared/styles/global.scss";

createRoot(document.getElementById("root")!).render(<AppProviders />);
