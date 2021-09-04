import React from 'react';
import { Accordion, Box, AccordionDetails, Typography } from '@material-ui/core';
import AccordionHeader from './AccordionHeader';



export default function SingleMachine({ name, date, status }) {

    const expireDate = new Date(date);
    expireDate.setMonth(expireDate.getMonth() - 5);
    const month = expireDate.getMonth();
    const newMonth = Number(date.slice(5, 7));




    return (
        <Accordion>
            <AccordionHeader
                name={name}
                text={"Kliknij by zobaczyć szczegóły"} />
            <AccordionDetails>
                <Box >
                    <Typography
                        color="primary"
                        vairant="body1">
                        Data ostatniego audytu:
                        <Box
                            component="strong">
                            {date}
                        </Box>
                        {(month - newMonth >= 6) &&
                            <Typography
                                color="secondary"
                                component="subtitle2"
                                display="block">
                                Należy przeprowadzić audyt!</Typography>}
                    </Typography>

                </Box>
            </AccordionDetails>
        </Accordion >

    )
}
