import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Widget from './Widget';
import Machins from "./Machins";


const useStyles = makeStyles(() => ({
    content: {
        flexGrow: 1,
        overflow: 'auto',
        marginTop: 25,
        overflow: 'hidden',
    },

}));

const Home = () => {
    const classes = useStyles();
    return (
        <Container
            fixed
            className={classes.content}
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


    );
};

export default Home;