import React from 'react';
import { Card, Typography } from '@material-ui/core';
import { makeStyles, Button, Icon } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import SettingsIcon from '@material-ui/icons/Settings';


const useStyles = makeStyles(() => ({
    card: {
        color: "#3f51b5",
        marginBottom: 25,
        padding: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer"
    },
    icon: {
        fontSize: 30,
        verticalAlign: "middle",
        marginBottom: 8
    }

}));


export default function SingleMachine({ name, type, lastAudit }) {
    const classes = useStyles();
    const history = useHistory();

    return (
        <Card
            className={classes.card}
            onClick={() => history.push("/machins")}>

            <Typography
                variant="h4"
            >
                <SettingsIcon
                    className={classes.icon} />
                {name}
            </Typography>
            <Typography
                variant="h6">
                Ostatni audyt: {lastAudit}
            </Typography>

            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                endIcon={<Icon>send</Icon>}
            >
                Przejdź do
            </Button>

        </Card >
    )
}
