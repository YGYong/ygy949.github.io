import React from "react";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "@/style/index.less"
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
