import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { FormControl, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core';

import { TextField } from '@material-ui/core';
import { Select, MenuItem } from '@material-ui/core';
import moment from 'moment';
import { FormHelperText } from '@material-ui/core';
import { Card } from '@material-ui/core';



const useStyles = makeStyles(() => ({

    container: {
        width: "80%",
        marginLeft: 275,
        marginTop: 25,
        overflow: 'hidden',
        display: "flex"
    },

    name: {
        marginBottom: 15
    },

    select: {
        marginBottom: 25,
        minWidth: 120,
    },

    textHelper: {
        marginLeft: 0
    },

    radioGroup: {
        display: "inline"
    }

}));
export default function Audyt() {
    const classes = useStyles();
    const date = moment().format("YYYY-MM-DD");
    const [slitter, setSlitter] = useState([]);
    const [name, setName] = useState("");
    const url = "https://my-json-server.typicode.com/Dam-o/slitter/db";

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => setSlitter(data.slitter))
            .then(err => console.log(err))
    }, []);


    return (
        <Container
            className={classes.container}>
            <FormControl
                component="fieldset"
                variant="outlined"
            >
                <FormHelperText
                    className={classes.textHelper}>Wybierz maszynę</FormHelperText>
                <Select
                    className={classes.select}
                    labelId="label"
                    id="select"
                    value={name}
                    onChange={e => setName(e.target.value)}>
                    <MenuItem value="1">SM201</MenuItem>
                    <MenuItem value="2">SM202</MenuItem>
                    <MenuItem value="3">SM203</MenuItem>
                    <MenuItem value="4">SM204</MenuItem>
                    <MenuItem value="5">SM205</MenuItem>
                    <MenuItem value="6">SM206</MenuItem>
                </Select>
                <TextField
                    className={classes.name}
                    id="name"
                    label="Podaj imię"
                    defaultValue=" "
                />
                <TextField
                    id="date"
                    label="Data audytu"
                    type="date"
                    defaultValue={date}
                    className={classes.textField}
                />
            </FormControl>
            <FormControl>
                <Card>
                    <FormLabel component="legend">1. Niepotrzebne urządzenia, narzędzia, meble zostały usunięte</FormLabel>
                    <RadioGroup
                        className={classes.radioGroup}
                        aria-label="gender"
                        name="gender1" >
                        <FormControlLabel value="female" control={<Radio />} label="Tak" />
                        <FormControlLabel value="male" control={<Radio />} label="Nie" />
                    </RadioGroup>
                </Card>
            </FormControl>





        </Container >
    )
}
