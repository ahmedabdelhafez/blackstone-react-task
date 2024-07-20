import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "../../pages/notfound/notfound";
import Home from "../../pages/home/home";
import NyDetails from "../../pages/home/ny-details/NyDetails";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/nydetails" element={<NyDetails />}></Route>
      <Route path="*" element={<Notfound />}></Route>
    </Routes>
  );
}

export default Routing;
