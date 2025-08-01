import React from "react";
import { useLocation } from "react-router-dom";
import Routes from "./index";

const RoutesWrapper: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <div className={`${isLandingPage}`}>
      <Routes />
    </div>
  );
};

export default RoutesWrapper;