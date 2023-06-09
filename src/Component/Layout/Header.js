import { Fragment } from "react";
import MealImage from "../../Asset/meals.jpg";
import classes from "./Header.module.css"
import HeaderCartLayout from "./headerCartLayout";

const Header = (props) => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeal</h1>
            <HeaderCartLayout onShowCart={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={MealImage} alt="Delicious Food" />
        </div>
    </Fragment>
}

export default Header;