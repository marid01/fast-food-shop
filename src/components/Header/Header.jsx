import React from "react";
import classes from "./Header.module.css";

function Header() {
    return (
        <div className={classes.header}>
            <div className={classes.container}>
                <div className={classes.deliveryTitle}>
                    Доставка г. Москва
                </div>
            </div>
        </div>
    )
}

export default Header;
