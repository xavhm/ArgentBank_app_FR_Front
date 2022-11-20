import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <p>Layout</p>
      <Outlet />
    </div>
  );
};

export default Layout;
