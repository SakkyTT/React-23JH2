import { Outlet } from 'react-router-dom';

import MainNavigation from '../MainNavigation/MainNavigation';
import classes from './Root.module.css';

function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet /> {/* Tähän lisätään lapsi komponentit */}
            </main>
        </>
    );
}

export default RootLayout;