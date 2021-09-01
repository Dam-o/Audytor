import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';


const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: "100%",
        height: 75,
        position: "relative"
    },

    paper: {
        padding: theme.spacing(2),
        overflow: 'auto',
        marginBottom: 50,
    },

    list: {
        paddingLeft: 15,
        fontSize: 20,
        display: "flex",
        justifyContent: "space-around",
        padding: 20,
    },

    listItem: {
        textDecoration: 'none',
        color: "#3f51b5",
        fontWeight: 600,

    },

    icon: {
        paddingRight: 5,
        fontSize: 30,
        marginBottom: 2,
        verticalAlign: "middle"
    },



}));





export default function Menu() {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(classes.drawerPaper),
            }}
        >

            <List
                className={classes.list}>
                <NavLink

                    className={classes.listItem}
                    exact to="/">
                    <HomeIcon
                        className={classes.icon} />
                    Strona główna
                </NavLink>
                <NavLink
                    className={classes.listItem}
                    to="/audyt">
                    <AssignmentTurnedInIcon
                        className={classes.icon} />
                    Audyt
                </NavLink>
                <NavLink
                    className={classes.listItem}
                    to="/machins">
                    <SettingsIcon
                        className={classes.icon} />
                    Maszyny
                </NavLink>
                <NavLink
                    className={classes.listItem}
                    to="/history">
                    <HistoryIcon
                        className={classes.icon} />
                    Historia
                </NavLink>
            </List>

        </Drawer >
    )
}
