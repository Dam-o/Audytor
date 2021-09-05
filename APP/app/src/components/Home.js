import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Widget from './Widget';
import MachineWidget from './MachineWidget';


const useStyles = makeStyles(() => ({
    content: {
        marginTop: 25,
        overflow: 'hidden',
    }
}));

const Home = () => {
    const [slitter, setSlitter] = useState([]);

    useEffect(() => {
        fetch("https://sliiter-fake-api.herokuapp.com/slitter")
            .then(data => data.json())
            .then(data => setSlitter(data))
            .catch(err => console.log(err))
    }, []);

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
                    xs={8}
                >
                    {
                        slitter.map((item, index) => {
                            return (
                                <MachineWidget
                                    key={index}
                                    name={item.name}
                                    type={item.type}
                                    audit={item.lastAudit}
                                />
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Container>


    );
};

export default Home;