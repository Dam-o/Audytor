import React from 'react'
import { Drawer, List, Link } from '@material-ui/core';
import { ListItem, makeStyles, } from '@material-ui/core';
import clsx from 'clsx';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(() => ({
    drawerPaper: {
        width: "100%",
        height: 75,
        position: "relative",
    },

    paper: {
        overflow: 'hidden',
        marginBottom: 50,
    },

    list: {
        fontSize: 25,
        display: "flex",
    },

    listItem: {
        display: "flex",
        justifyContent: "center",
    },
    icon: {
        paddingRight: 5,
        fontSize: 35,
        verticalAlign: "middle"
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
                <ListItem
                    className={classes.listItem}>
                    <Link
                        className="link"
                        href="/"
                        color="primary"
                        underline="hover">
                        <HomeIcon
                            className={classes.icon}
                            color="primary"
                        />Strona główna</Link>
                </ListItem>
                <ListItem
                    className={classes.listItem}>
                    <Link
                        className="link"
                        href="/audyt"
                        color="primary"
                        underline="hover">
                        <AssignmentTurnedInIcon
                            className={classes.icon} />Audyt</Link>
                </ListItem>
                <ListItem
                    className={classes.listItem}>
                    <Link
                        className="link"
                        href="/machins"
                        color="primary"
                        underline="hover">
                        <SettingsIcon
                            className={classes.icon} />Maszyny </Link>
                </ListItem>
            </List>
        </Drawer >
    )
}
