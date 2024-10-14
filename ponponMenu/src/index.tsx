import "rsuite/dist/rsuite.min.css";

import { PonponMenu } from "PonponMenu";
import React from "react";
import ReactDOM from "react-dom/client";
import { AppContextProvider } from "contexts/AppContexts";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("ponponMenu") as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <PonponMenu />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
