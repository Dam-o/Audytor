import React from 'react';
import { Accordion, AccordionSummary, Typography, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccordionHeader from './AccordionHeader';



export default function SingleMachine({ name, type, date, status }) {



    return (
        <Accordion>
            <AccordionHeader
                name={name}
                text={"Kliknij by zobaczyć szczegóły"} />

            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>

    )
}
