import React from 'react'
import { AccordionSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function AccordionHeader({ name, text }) {

    return (
        <AccordionSummary
            expandIcon={
                <ExpandMoreIcon
                    color="primary"
                    fontSize="large" />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography
                variant="h4"
                color="primary">
                {name}
                <Typography
                    variant="body1">
                    {text}
                </Typography>
            </Typography>
        </AccordionSummary>
    )
}
