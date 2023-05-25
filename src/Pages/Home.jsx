import React from "react";
import SideNav from "../components/Sidenav";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import "../DashBoard.css"
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from "../components/Accordian";
import BarChart from "../charts/BarChart";

const Home = () => {
    return (
        <>
            <div className="bgcolor">


                <Navbar />
                <Box height={70} />

                <Box sx={{ display: "flex" }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Stack spacing={2} direction="row">
                                    <Card sx={{ minWidth: 49 + "%", height: 140 }} className="gradient">
                                        <CardContent>
                                            <div >
                                                <CreditCardIcon className="iconcolor" />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                $500.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ffffff" }}>
                                                Total Earning
                                            </Typography>

                                        </CardContent>
                                    </Card>

                                    <Card sx={{ minWidth: 49 + "%", height: 140 }} className="gradientlight">
                                        <CardContent>
                                            <div >
                                                <ShoppingBagIcon className="iconcolor" />
                                            </div>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}  >
                                                $900.00
                                            </Typography>
                                            <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ffffff" }}  >
                                                Total Order
                                            </Typography>

                                        </CardContent>
                                    </Card>
                                </Stack>
                            </Grid>
                            <Grid item xs={4}>
                                <Stack spacing={2} >
                                    <Card className="gradientlight" >
                                        <Stack spacing={2} direction="row" >
                                            <div className="iconstyle">
                                                <StorefrontIcon className="iconcolor" />
                                            </div>
                                            <div className="paddingAll" style={{ color: 'white' }} >
                                                <span className="pricetitle" >$203K</span>
                                                <br />
                                                <span className="pricetitle">Total Income</span>
                                            </div>
                                        </Stack>

                                    </Card>
                                    <Card >
                                        <Stack spacing={2} direction="row" >
                                            <div className="iconstyleblack" >
                                                <StorefrontIcon />
                                            </div>
                                            <div className="paddingAll" >
                                                <span className="pricetitle">$203K</span>
                                                <br />
                                                <span className="pricetitle">Total Income</span>
                                            </div>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Grid>
                        </Grid>
                        <Box height={20} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                        <BarChart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={4}>
                                <Card sx={{ height: 60 + "vh" }}>
                                    <CardContent>
                                    <div className="paddingAll" >
                                                <span className="pricetitle">Popular Products</span>
                                                
                                            </div>
                                        <AccordionDash />

                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Home;
