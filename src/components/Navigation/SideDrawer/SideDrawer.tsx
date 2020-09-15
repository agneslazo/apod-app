import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, IconButton } from '@material-ui/core';
import classes from './SideDrawer.module.css';
import DrawerItem from './DrawerItem/DrawerItem';

function SideDrawer() {
    const [open, setOpen] = useState(false);

    const openDrawer = () => {
        setOpen(true);
    }

    const closeDrawer = () => {
        setOpen(false);
    }

    const drawerItemList = [
        {
            label: 'Home',
            path: '/home'
        },
        {
            label: 'Calendar',
            path: '/calendar'
        },
        {
            label: 'About',
            path: '/about'
        },
    ]

    return (
        <>
            <IconButton onClick={openDrawer}>
                <MenuIcon/>
            </IconButton>
            <Drawer anchor='left' open={open} onClose={closeDrawer} >
                <div className={classes.SideDrawerContainer}>
                    <div className={classes.LogoContainer} >
                        <img
                            src='https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'
                            alt="nasa-logo"
                            className={classes.Logo}
                        />
                        <div>Astronomy Picture of the Day by NASA</div>
                    </div>
                    <ul className={classes.DrawerItemListContainer} >
                        {drawerItemList.map(item=><DrawerItem key={item.label} item={item} closeDrawer={closeDrawer} />)}
                    </ul>
                </div>
            </Drawer>
        </>
    );
}

export default SideDrawer;
