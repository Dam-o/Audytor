import React from 'react'
import { Box, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(() => ({
    input: {
        marginBottom: 25,
        minWidth: 380,
        paddingRight: 50,
    },
    inputContainer: {
        display: "flex",
        alignItems: "center",
        width: 588,
        justifyContent: "space-between"
    }

}));

export default function NameAndDate({ nameError, dateError, handler }) {
    const classes = useStyles();

    return (
        <>
            <Box
                className={classes.inputContainer}>
                <TextField
                    className={classes.input}
                    name="who"
                    label="Podaj imię"
                    onChange={handler} />
                {nameError}
            </Box>
            <Box
                className={classes.inputContainer}>
                <TextField
                    className={classes.input}
                    name="lastAudit"
                    type="date"
                    onChange={handler} />
                {dateError}
            </Box>
        </>
    )
}

