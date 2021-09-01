import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container'
import { Grid, Card, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({

    container: {

        marginTop: 25,
        overflow: 'hidden',
        display: "flex",
        flexWrap: "wrap"
    },
    card: {
        color: "#3f51b5",
        padding: 20,
        height: 314,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"

    }




}));



export default function MachinsPage() {
    const [slitter, setSlitter] = useState([]);
    const classes = useStyles();
    const url = "http://localhost:3001/slitter";

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => setSlitter(data))
            .then(err => console.log(err))
    }, []);

    return (

        <Container
            className={classes.container}>
            <Grid
                container
                spacing={3}>
                {
                    slitter.map((item, index) => {
                        return (
                            <Grid
                                item
                                xs={4}
                                key={index}>
                                <Card
                                    className={classes.card}>
                                    <div>
                                        <Typography
                                            variant="h4">{item.name}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1">
                                            {item.type}
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography
                                            variant="subtitle1">
                                            Ostatni audyt: {item.lastAudit}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1">
                                            Wynik:{item.status.answer1}
                                        </Typography>
                                    </div>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container >

    )
}
