import React from "react";
import SideNav from "../components/Sidenav";
import { Box } from "@mui/material";
import Navbar from "../components/Navbar";

const Settings = () => {
  return (
    <>
     <Navbar />
      <Box height={30}/>
    <Box sx={{ display: "flex" }}>
      <SideNav />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <h1>Settings</h1>
               
            </Box>
    </Box>
    
    </>
  );
};

export default Settings;
