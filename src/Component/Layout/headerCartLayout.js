import ButtonIcon from "../Cart/CartIcon";
import classes from "./headerCartLayout.module.css"
const HeaderCartLayout = () => {
    return <button className={classes.button}>
        <span className={classes.icon}>
            <ButtonIcon/>
        </span>
        <span> Your Cart </span>
        <span className={classes.badge}>3</span>
    </button>
}

export default HeaderCartLayout;
