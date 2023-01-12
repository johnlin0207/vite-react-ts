import React from "react";
import ReactDOM from "react-dom/client";
import StoreContext from "./contexts/storeContext";
import store from "./store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <App />
    </StoreContext.Provider>
  </React.StrictMode>
);
