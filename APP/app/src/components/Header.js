
import React from 'react';
import { Link, Toolbar, AppBar } from '@material-ui/core';
import Menu from "./Menu";




export default function Header() {
    return (
        <>
            <AppBar
                position='static'
            >
                <Toolbar>

                    <Link
                        className="link"
                        href="/"
                        variant="h4"
                        color="inherit"
                    >Audytor</Link>
                </Toolbar>
            </AppBar>
            <Menu />

        </>
    )
}
