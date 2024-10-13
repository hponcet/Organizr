import { PonponMenu } from "PonponMenu";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("ponponMenu") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PonponMenu />
  </React.StrictMode>
);
