import React from "react";
import SideNav from "../components/Sidenav";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import { GeoChart } from "../charts/GeoChart";
import PieChart from "../charts/PieChart"

import HbarChart from "../charts/HbarChart";
const Analytics = () => {
    return (
        <>


            <div className="bgcolor">
                <Navbar />
                <Box height={70} />
                <Box sx={{ display: "flex" }}>
                    <SideNav />
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={5}>
                                <Stack direction="row" spacing={2}>
                                    <Box sx={{ width: "50%" }}>
                                        <Card sx={{ height: 19 + "vh" }} className="gradient">
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    sx={{ color: "#ffffff" }}
                                                >
                                                    Visitors
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: "#ffffff" }}
                                                >
                                                    24,630
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: "#ffffff" }}
                                                >
                                                    Since Last week
                                                </Typography>
                                            </CardContent>
                                        </Card>


                                        <Card
                                            sx={{ height: 19 + "vh", marginTop: "16px " }}
                                            className="gradientlight"
                                        >
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="p"
                                                    component="div"
                                                    sx={{ color: "#ffffff", padding: "7px 0px" }}
                                                >
                                                    Visitors
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: "#ffffff", padding: "7px 0px" }}
                                                >
                                                    24,630
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: "#ffffff" }}
                                                >
                                                    Since Last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>

                                    <Box sx={{ width: "50%", height: "50%" }}>
                                        <Card sx={{ height: 19 + "vh" }} className="gradientlight">
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    sx={{ color: "#ffffff", padding: "7px 0px" }}
                                                >
                                                    Visitors
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: "#ffffff" }}
                                                >
                                                    24,630
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: "#ffffff" }}
                                                >
                                                    Since Last week
                                                </Typography>
                                            </CardContent>
                                        </Card>

                                        <Card
                                            sx={{ height: 19 + "vh", marginTop: "16px " }}
                                            className="gradient"
                                        >
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="p"
                                                    component="div"
                                                    sx={{ color: "#ffffff", padding: "7px 0px" }}
                                                >
                                                    Visitors
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: "#ffffff" }}
                                                >
                                                    24,630
                                                </Typography>
                                                <Typography
                                                    gutterBottom
                                                    variant="body2"
                                                    component="div"
                                                    sx={{ color: "#ffffff" }}
                                                >
                                                    Since Last week
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Box>
                                </Stack>
                            </Grid>

                            <Grid item xs={7}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <HbarChart/>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Box height={16} />
                        <Grid container spacing={2}>
                            <Grid item xs={8}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <GeoChart />
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={4}>
                                <Card sx={{ height: 40 + "vh" }}>
                                    <CardContent>
                                        <PieChart />
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

export default Analytics;