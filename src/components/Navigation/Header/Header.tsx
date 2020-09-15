import React from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.Header} >
            <SideDrawer/>
            <div>
                <img
                    src='https://www.nasa.gov/sites/all/themes/custom/nasatwo/images/nasa-logo.svg'
                    alt="nasa-logo"
                    className={classes.Logo}
                />
            </div>
        </header>
    );
}

export default Header;
