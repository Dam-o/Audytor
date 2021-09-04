import React from 'react'
import { ListItem, Typography, Box } from "@material-ui/core"
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    listItem: {
        display: "flex",
        paddingBottom: 10
    },

    icon: {
        verticalAlign: "middle",
    }


}));

export default function Answers({ name, status }) {
    const classes = useStyles();


    const convert = (status) => {
        if (status === "pass") {
            return (
                <Box
                    className={classes.listItem}>
                    <Typography
                        variant="subtitle1"
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
                    className={classes.listItem}>
                    <Typography
                        variant="subtitle1"
                        color="secondary">
                        Niezaliczone
                    </Typography>
                    <CancelIcon
                        color="secondary"
                        className={classes.icon} />
                </Box>)
        }
    };

    convert();
    return (

        <ListItem>
            {convert(status)}
        </ListItem>

    )
}
