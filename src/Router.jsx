import React from "react";
import { Routes, Route } from "react-router-dom";

import DashboardPage from "./pages/dashboard/DashboardPage";
//import SkillPage from "./pages/SkillPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      {/* <Route path="/skills" element={<SkillPage />} /> */}
    </Routes>
  );
};

export default Router;