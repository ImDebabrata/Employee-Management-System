import React from "react";
import { Route, Routes } from "react-router-dom";
import AddEmployee from "./AddEmployee";
import AllEmployee from "./AllEmployee";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AddEmployee />} />
      <Route path="/employees" element={<AllEmployee />} />
    </Routes>
  );
};

export default AllRoutes;
