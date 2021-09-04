import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SingleMachine from './SingleMachine';


const useStyles = makeStyles(() => ({

    container: {
        marginTop: 25,
        overflow: 'hidden',
        display: "block"
    }

}));

export default function MachinsPage() {
    const [slitter, setSlitter] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        fetch("https://sliiter-fake-api.herokuapp.com/slitter")
            .then(data => data.json())
            .then(data => setSlitter(data))
            .then(err => console.log(err))
    }, []);





    return (
        <Container
            className={classes.container}>
            {
                slitter.map((item, index) => {
                    return (
                        <SingleMachine
                            key={index}
                            name={item.name}
                            date={item.lastAudit}
                            status={item.status}
                        />
                    )
                })
            }
        </Container>
    )
}
