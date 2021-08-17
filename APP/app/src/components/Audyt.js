import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';



const useStyles = makeStyles(() => ({

    container: {
        width: "80%",
        marginLeft: 275,
        marginTop: 25,
        overflow: 'hidden',
        display: "flex",
        border: "1px solid black"

    },

}));
export default function Audyt() {
    const classes = useStyles();


    return (
        <Container
            className={classes.container}>
            <form>
                <label htmlFor="name">Kto przeprowadza audyt?</label>
                <input
                    type="text"
                    name="name">
                </input>
                <lable>Data audytu:</lable>
                <input
                    type="date"
                    name="date"
                ></input>


            </form>
        </Container >
    )
}
