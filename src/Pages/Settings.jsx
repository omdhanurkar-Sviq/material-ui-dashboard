import React from "react";
import SideNav from "../components/Sidenav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";
import ProductList from "../settings/List";

const Settings = () => {
  return (
    <div className="bgcolor">
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: "flex" }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ProductList />

        </Box>
      </Box>

    </div>
  );
};

export default Settings;
