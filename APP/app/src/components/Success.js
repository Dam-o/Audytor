import { Typography, Card, Container } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(() => ({
    fullscreen: {
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        overflow: "hidden",
        zIndex: 1000,
        textAlign: "center",
        marginTop: 75,
        marginBottom: 25,
        backgroundColor: "white",
        boxShadow: "-1px 0px 19px 2px rgba(66, 68, 90, 0.14)"

    },
    popUpText: {
        color: "green",
        fontWeight: "bold",
        padding: 250,
        overflow: "hidden",
    },
    icon: {
        position: "absolute",
        top: 10,
        right: 10,
        cursor: "pointer"
    }

}));



export default function Success() {
    const classes = useStyles();

    return (
        <Container
            className={classes.fullscreen}>

            <Typography
                variant="h2"
                className={classes.popUpText}>
                Odpowiedzi zostały przesłane.
            </Typography>

            <CloseIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
                onClick={() => window.location.reload()}
            />
        </Container>

    )
}
