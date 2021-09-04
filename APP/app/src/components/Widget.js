import React from 'react'
import AddBoxIcon from '@material-ui/icons/AddBox';
import Paper from "@material-ui/core/Paper";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { Container } from '@material-ui/core';



const useStyles = makeStyles(() => ({
    paper: {
        width: 250,
        height: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#3f51b5",
        cursor: "pointer",

    },
    icon: {
        width: 155,
        height: 155,
        marginBottom: 15,

    }


}));



const Widget = () => {
    const classes = useStyles();
    const history = useHistory();



    return (
        <Container>
            <Paper
                onClick={() => history.push("/audyt")}
                className={classes.paper}
            >
                <AddBoxIcon
                    className={classes.icon} />
                <Typography
                    variant="h4"
                >
                    Dodaj audyt
                </Typography>
            </Paper>
        </Container>
    )
}

export default Widget;