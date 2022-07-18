import App from "./App";
import { ChannelContextProvider } from "./context/ChannelContext";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <React.StrictMode>
    <ChannelContextProvider>
      <App />
    </ChannelContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
