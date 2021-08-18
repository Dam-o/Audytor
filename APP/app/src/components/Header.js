
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Menu from "./Menu";




export default function Header() {
    return (
        <>
            <AppBar
                position='static'
            >
                <Toolbar>
                    <Typography
                        variant='h4'>
                        Audytor
                    </Typography>
                </Toolbar>
            </AppBar>
            <Menu />

        </>
    )
}
