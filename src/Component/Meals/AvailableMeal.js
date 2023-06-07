import DUUMY_MEALS from "./dummy-meals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
    const MealList = DUUMY_MEALS.map(item => <MealItem key={item.id} name={item.name} desc={item.description} price={item.price}/>)
    return <section className= {classes.meals}>
            <Card>
                <ul>
                    {MealList}
                </ul>
            </Card>
        </section>
}

export default AvailableMeals;