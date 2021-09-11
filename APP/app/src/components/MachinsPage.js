import React, { useState, useEffect } from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SingleMachine from './SingleMachine';
import { getSliiter } from './API/getSlitter';


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
        getSliiter(setSlitter)
    }, []);

    return (
        <Container
            className={classes.container}>
            {
                slitter.map((item, index) => {
                    return (
                        <SingleMachine
                            who={item.who}
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
