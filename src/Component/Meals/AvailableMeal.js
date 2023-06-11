import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState('');
    useEffect(()=>{
        const featchMeals = async () => {
            const response = await fetch("https://food-order-data-cc598-default-rtdb.firebaseio.com/meals.json");
            
            if(!response.ok){
                throw new Error("Something went wrong!");
            }
            const responseData = await response.json();
            const loadMeals = [];
            for(let meal in responseData){
                loadMeals.push({
                    id: meal,
                    name: responseData[meal].name,
                    description: responseData[meal].description,
                    price: responseData[meal].price
                })
            }
            setMeals(loadMeals);
            setIsLoading(false);
        }
        featchMeals().catch((error)=>{
            setIsLoading(false);
            setHttpError(error.message);
            console.log("Oops! caught error");
        })
    },[])

    if(isLoading){
        return <section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if(httpError){
        return <section className={classes.MealsError}>
            <p>{httpError}</p>
        </section>
    }

    const MealList = meals.map(item => <MealItem key={item.id} id={item.id} name={item.name} desc={item.description} price={item.price}/>)
    return <section className= {classes.meals}>
            <Card>
                <ul>
                    {MealList}
                </ul>
            </Card>
        </section>
}

export default AvailableMeals;