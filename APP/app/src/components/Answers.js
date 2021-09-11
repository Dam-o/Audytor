import React from 'react'
import { ListItem, Typography, Box } from "@material-ui/core"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    answer: {
        display: "flex",
    },

    icon: {
        verticalAlign: "middle",
        marginLeft: 10
    },

    listItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10
    }

}));

export default function Answers({ name, status }) {
    const classes = useStyles();

    const convertAnswer = (status) => {
        if (status === "pass") {
            return (
                <Box
                    className={classes.answer}>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        color="primary">
                        Zaliczone
                    </Typography>
                    <CheckCircleIcon
                        color="primary"
                        className={classes.icon} />
                </Box>)
        } else {
            return (
                <Box
                    className={classes.answer}>
                    <Typography
                        variant="subtitle1"
                        component="p"
                        color="secondary">
                        Niezaliczone
                    </Typography>
                    <CancelIcon
                        color="secondary"
                        className={classes.icon} />
                </Box>)
        }

    };

    const convertName = (name) => {
        const number = name.match(/\d+/)
        return (
            <Typography
                variant="subtitle1"
                component="p"
                color="primary">
                {`Pytanie ${number}:`}
            </Typography >
        )
    };



    return (

        <ListItem
            className={classes.listItem}>
            {convertName(name)}  {convertAnswer(status)}
        </ListItem>

    )
}
