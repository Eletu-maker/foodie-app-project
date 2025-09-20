import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../../components/meals/meals-grid";
import { getMeals } from "../../lib/meals";
import { Suspense } from "react";

async function  Meals(){
     const meals = await getMeals();
     return <MealsGrid meals={meals} />
}

export default async function MealsPage() {
  
    return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">
            share your own recipes with the community
          </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
            <Meals />
        </Suspense>
        
      </main>
    </>
  );
}
