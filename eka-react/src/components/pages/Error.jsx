import MainNavigation from "../MainNavigation/MainNavigation";

import classes from './Error.module.css';

function ErrorPage(){
    return(
        <>
        <MainNavigation />
        <main className={classes.content}>
            <h1>An error occured!</h1>
            <p>Could not find this page!</p>
        </main>
        </>
    );
}

export default ErrorPage;