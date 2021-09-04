import React from 'react';
import { Accordion, Box, AccordionDetails, Typography, List } from '@material-ui/core';
import AccordionHeader from './AccordionHeader';
import Answers from './Answers';
import clsx from 'clsx';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({

    delay: {
        borderLeft: "10px solid #f50057"
    }

}));

export default function SingleMachine({ name, date, status }) {

    const classes = useStyles();

    const expireDate = new Date(date);
    expireDate.setMonth(expireDate.getMonth() - 5);
    const month = expireDate.getMonth();
    const newMonth = Number(date.slice(5, 7));




    return (
        <Accordion
            className={clsx((month - newMonth >= 6) && classes.delay)}>
            <AccordionHeader
                name={name}
                text={"Kliknij by zobaczyć szczegóły"} />
            <AccordionDetails>
                <Box >
                    <Typography
                        color="primary"
                        variant="h5">
                        Data ostatniego audytu:
                        <Box
                            component="strong">
                            {date}
                        </Box>
                    </Typography>
                    {(month - newMonth >= 6) &&

                        <Typography
                            color="secondary"
                            variant="body1"
                            display="block">
                            Należy przeprowadzić audyt!</Typography>}
                </Box>
                <List >
                    {
                        Object.keys(status).map(key => {
                            return (
                                <Answers
                                    key={key}
                                    name={key}
                                    status={status[key]} />
                            )
                        })}
                </List>
            </AccordionDetails>

        </Accordion >

    )
}
