import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SingleAudit from './SingleAudit';
import { getSliiter } from './API/getSlitter';

const useStyles = makeStyles(() => ({

    container: {
        marginTop: 25,
        overflow: 'hidden',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    }
}));


export default function Audyt() {
    const classes = useStyles();
    const [slitter, setSlitter] = useState([]);

    useEffect(() => {
        getSliiter(setSlitter);
    }, []);

    return (
        <Container
            className={classes.container}>
            {
                slitter.map((item, index) => {
                    return (
                        <SingleAudit
                            key={index}
                            id={item.id}
                            name={item.name}
                        />
                    )
                })
            }
        </Container >
    )
}
