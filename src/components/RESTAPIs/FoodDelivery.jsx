import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './FoodDelivery.module.css';

export const FoodDelivery = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching seafood category meals from TheMealDB
    axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
      .then(response => {
        setMeals(response.data.meals); // Access the 'meals' array
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>Seafood Menu</h1>
      {loading ? <p>Loading menu...</p> : (
        <div className={styles.grid}>
          {meals.map(meal => (
            <div key={meal.idMeal} className={styles.card}>
              <img src={meal.strMealThumb} alt={meal.strMeal} className={styles.image} />
              <h3 className={styles.meal}>{meal.strMeal}</h3>
              <button>Order Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};