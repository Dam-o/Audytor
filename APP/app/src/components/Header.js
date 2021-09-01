
import React, { useState } from 'react';
import { Link, Toolbar, AppBar } from '@material-ui/core';
import Menu from "./Menu";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


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
                    <Link
                        className="link"
                        href="/"
                        variant="h4"
                        color="inherit"
                    >Audytor</Link>
                </Toolbar>
            </AppBar>

            {open &&
                (
                    <Menu />
                )}

        </>
    )
}
