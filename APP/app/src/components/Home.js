import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Widget from './Widget';
import Machins from "./Machins";

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
                maxWidth="lg"
                className={classes.container}
            >
                <Grid
                    container
                >
                    <Grid
                        item
                        xs={3}>
                        <Widget />

                    </Grid>
                    <Grid
                        item
                        xs={9}>
                        <Machins />
                    </Grid>
                </Grid>
            </Container>
        </main >

    );
};

export default Home;