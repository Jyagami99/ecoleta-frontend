import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreatePoint from "./pages/CreatePoint/createPoint";
import Home from "./pages/Home/home";

function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-point" element={<CreatePoint />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Router;
