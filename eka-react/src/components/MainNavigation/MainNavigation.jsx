import { NavLink } from 'react-router-dom';

import classes from './MainNavitation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => {
                            // NavLink saa isActive parametrin, jossa true/false arvo,
                            // onko tämä route aktiivinen.
                            return isActive ? classes.active : undefined
                        }}
                        end
                        >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" className={({ isActive }) => 
                            isActive ? classes.active : undefined
                        }>Products</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;