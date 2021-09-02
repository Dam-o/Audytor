

import React from 'react'
import { Typography, Card, Box, List, ListItem } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(() => ({
    card: {
        color: "#3f51b5",
        padding: 20,
        height: 450,
        display: "flex",
        justifyContent: "space-between"
    },
    listItem: {
        display: "inline-block",
        left: 40,

    }

}));



export default function SingleMachine({ name, type, date, status }) {

    const classes = useStyles();

    return (
        <Card
            className={classes.card}>
            <Box>
                <Typography
                    variant="h2">
                    {name}
                </Typography>
                <Typography
                    variant="subtitle1">
                    {type}
                </Typography>
                <Typography
                    variant="subtitle1">
                    Ostatni audyt: {date}
                </Typography>
            </Box>
            <List   >
                Wyniki: {
                    Object.keys(status).map(key => {
                        return (
                            <ListItem
                                className={classes.listItem}
                                key={key}>
                                {`${key}: ${status[key]}`}
                            </ListItem>
                        )
                    })}

            </List>



        </Card>
    )
}
