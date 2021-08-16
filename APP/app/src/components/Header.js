
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "./Menu";




export default function Header() {
    const [open, setOpen] = useState(false);
    const toggleMenu = () => {
        setOpen(!open);
    }




    return (
        <>

            <AppBar
                position='static'
            >
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleMenu}
                    >
                        <MenuIcon />

                    </IconButton>
                    <Typography
                        variant='h4'>
                        Audytor
                    </Typography>
                </Toolbar>
            </AppBar>
            {open &&
                (
                    <Menu />
                )}





        </>
    )
}
