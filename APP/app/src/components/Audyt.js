import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Select, MenuItem } from '@material-ui/core';
import moment from 'moment';
import { FormHelperText } from '@material-ui/core';
import AuditQuestions from './AuditQuestions';

const useStyles = makeStyles(() => ({

    container: {
        width: "80%",
        marginLeft: 275,
        marginTop: 25,
        overflow: 'hidden',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },

    name: {
        marginBottom: 15,
        marginRight: 50,
        minWidth: 200,
    },


    select: {
        marginRight: 50,
        marginBottom: 25,
        minWidth: 200,
    },

    textHelper: {
        marginLeft: 0,

    },

    fieldset: {
        display: "inline-block",
    }



}));


export default function Audyt() {
    const classes = useStyles();
    const date = moment().format("YYYY-MM-DD");
    const [slitter, setSlitter] = useState([]);
    const [id, setId] = useState("");
    const [auditDate, setAuditDate] = useState("");
    const [name, setName] = useState("");

    const url = "https://my-json-server.typicode.com/Dam-o/slitter/db";


    const getSlitters = () => {
        fetch(url)
            .then(data => data.json())
            .then(data => setSlitter(data.slitter))
            .then(err => console.log(err))

    }
    const dataHandler = (e) => {
        setAuditDate(e.target.value);
    };

    const nameHandler = (e) => {
        setName(e.target.value)
    };

    useEffect(() => {
        getSlitters();
    }, []);



    return (
        <Container
            className={classes.container}>
            <FormControl
                className={classes.fieldset}
                component="fieldset"
                variant="outlined"
            >
                <FormHelperText
                    className={classes.textHelper}>Wybierz maszynę</FormHelperText>
                <Select
                    className={classes.select}
                    labelId="label"
                    id="select"
                    value={id}
                    onChange={e => setId(e.target.value)}>
                    {
                        slitter.map((el, index) => {
                            return (
                                <MenuItem
                                    key={index}
                                    value={el.id}>
                                    {el.name}
                                </MenuItem>
                            )
                        })
                    }
                </Select>
                <TextField
                    className={classes.name}
                    id="name"
                    label="Podaj imię"
                    defaultValue=" "
                    onChange={nameHandler}
                />
                <TextField
                    className={classes.date}
                    id="date"
                    label="Data audytu"
                    type="date"
                    defaultValue={date}
                    onChange={dataHandler}
                />
            </FormControl>
            <AuditQuestions
                name={name}
                machineId={id}
                date={auditDate}

            />

        </Container >
    )
}
