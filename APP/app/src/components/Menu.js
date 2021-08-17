import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import HistoryIcon from '@material-ui/icons/History';
import SettingsIcon from '@material-ui/icons/Settings';


const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        whiteSpace: 'nowrap',
        width: 240,
        height: "100vh",
        marginTop: 65,
        position: "absolute"

    },

    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

    list: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 15,
        fontSize: 20,
    },


    listItem: {
        textDecoration: 'none',
        paddingTop: 25,
        color: "#3f51b5",
        fontWeight: 600,
        display: "flex",
        alignItems: "center",

    },

    icon: {
        paddingRight: 5,
        fontSize: 30,
    }





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
