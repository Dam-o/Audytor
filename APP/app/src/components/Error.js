import React from 'react'
import { Box, Typography } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    error: {
        color: "red",
        textAlign: "right",
        marginRight: 10,
    }
}));

export default function Error({ name }) {
    const classes = useStyles();
    return (
        <Box
            component="span"
            className={classes.error}>
            <Typography
                variant="subtitle2"
                component="span">
                {name}
            </Typography>
        </Box>
    )
}
