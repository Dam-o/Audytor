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
        background: "transparent",
        height: "100vh",
        zIndex: 1000,
        textAlign: "center",
        marginTop: 75
    },

    popUpText: {
        color: "green",
        fontWeight: "bold",
        padding: 250,
        overflow: "hidden",
    },
    icon: {
        position: "absolute",
        bottom: 640,
        left: 1210,
        cursor: "pointer"
    }

}));



export default function Success() {
    const classes = useStyles();

    return (
        <Container
            className={classes.fullscreen}>
            <Card>
                <Typography
                    variant="h2"
                    className={classes.popUpText}>
                    Odpowiedzi zostały przesłane.
                </Typography>
            </Card>
            <CloseIcon
                color="primary"
                fontSize="large"
                className={classes.icon}
                onClick={() => window.location.reload()}
            />
        </Container>

    )
}
