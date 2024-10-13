import { PonponMenu } from "PonponMenu";
import React from "react";
import ReactDOM from "react-dom/client";

export function mount(el: HTMLDivElement) {
  const root = ReactDOM.createRoot(el);

  root.render(
    <React.StrictMode>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <PonponMenu />
    </React.StrictMode>
  );
}
