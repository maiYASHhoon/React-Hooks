import React from "react";
import ReactDOM from "react-dom/client";
import App from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App initiatlCount={0} />);
