import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    input: {
        marginBottom: 25,
        maxWidth: "49%",
    }
}));

export default function NameAndDate({ nameError, dateError, handler }) {
    const classes = useStyles();

    return (
        <>
            <TextField
                className={classes.input}
                name="who"
                label="Podaj imię"
                onChange={handler}
            />
            {nameError}
            <TextField
                className={classes.input}
                name="lastAudit"
                type="date"
                onChange={handler}
            />
            {dateError}
        </>
    )
}

