import React from 'react'
import { FormLabel, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AuditCard from './styles/AuditCard';

const useStyles = makeStyles(() => ({

    radioGroup: {
        display: "inline-block",
        textAlign: "left"
    }
}));


export default function Question({ question, label, name, func, error }) {
    const classes = useStyles();



    return (
        <AuditCard>
            <FormLabel
                component="legend">{question}</FormLabel>
            <RadioGroup
                className={classes.radioGroup}
                aria-label={label}
                name={name}
                onChange={func} >
                <FormControlLabel value="pass" control={<Radio />} label="Tak" />
                <FormControlLabel value="fail" control={<Radio />} label="Nie" />
            </RadioGroup>
            {error}
        </AuditCard>
    )
}
