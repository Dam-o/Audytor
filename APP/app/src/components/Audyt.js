import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import SingleAudit from './SingleAudit';

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

    const url = "https://my-json-server.typicode.com/Dam-o/slitter/slitter";

    const getMachins = () => {
        fetch(url)
            .then(data => data.json())
            .then(data => setSlitter(data))
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getMachins();
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
                            getMachins={getMachins}
                        />
                    )
                })
            }

        </Container >
    )
}
