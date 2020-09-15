import React from 'react';
import { useHistory } from 'react-router';
import classes from './DrawerItem.module.css'

export function DrawerItem({item, closeDrawer}: any) {

    const history = useHistory();

    const drawerItemSelected = () => {
        closeDrawer();
        history.push(item.path);
    }

    return (
        <li className={classes.DrawerItem} onClick={drawerItemSelected} >
            {item.label}
        </li>
    );
}

export default DrawerItem;
