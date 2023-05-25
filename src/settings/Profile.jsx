import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Person, Email, Phone, Home } from '@mui/icons-material';

const Profile = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Person />
                        <Typography variant="h5" component="div">
                            Name
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Omprakash Dhanurkar
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Email />
                        <Typography variant="h5" component="div">
                            Email
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            omdhanurkarXYZ@gmail.com
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Phone />
                        <Typography variant="h5" component="div">
                            Contact
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            +91 70835XXXXX
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12}>
                <Card>
                    <CardContent>
                        <Home />
                        <Typography variant="h5" component="div">
                            Address
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            123 Main Street, Nagpur, Maharashtra,India
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Profile;
