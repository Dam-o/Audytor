import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Widget from './Widget';
import Machins from "./Machins";
import moment from "moment";

const useStyles = makeStyles(() => ({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },

    container: {
        width: "80%",
        marginLeft: 275,
        marginTop: 25,
        overflow: 'hidden',
    },

}));

const Home = () => {
    const classes = useStyles();
    return (
        <main
            className={classes.content}>
            <Container
                fixed
                maxWidth="xl"
                className={classes.container}
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={4}>
                        <Widget />

                    </Grid>
                    <Grid
                        item
                        xs={8}>
                        <Machins />
                    </Grid>
                </Grid>
            </Container>
        </main >

    );
};

export default Home;