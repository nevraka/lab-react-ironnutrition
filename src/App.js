import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import Form from './components/Form';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';

function App() {
  const [foodArray, setFoodArray] = useState(foods);
  const [copyFoods, setCopyFoods] = useState(foods);
  const [showForm, setShowForm] = useState(false);
  const [todaysFood, setTodaysFood] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newFood = {
      name: e.target.name.value,
      calories: e.target.calories.value,
      image: e.target.image.value,
    };
    console.log(newFood);
    setFoodArray([newFood, ...foodArray]);
    setCopyFoods([newFood, ...copyFoods]);
    setShowForm(false);
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  const handleSearch = (e) => {
    let wr = e.target.value;
    let filteredFoods = foodArray.filter((fd) => {
      return fd.name.includes(wr);
    });
    setCopyFoods(filteredFoods);
  };

  const handleAdd = (food, quantity) => {
    let found = null;
    for (let i = 0; i < todaysFood.length; i++) {
      const f = todaysFood[i];
      if (f.name === food.name) {
        found = f;
        break;
      }
    }
    if (found) {
      found.quantity += quantity;
      setTodaysFood([...todaysFood]);
    } else {
      // Create our object with quantity
      let todaysDish = {
        name: food.name,
        quantity: quantity,
        calories: food.calories,
      };
      setTodaysFood([todaysDish, ...todaysFood]);
    }
  };

  return (
    <div className="columns">
      <div className="column">
        <button onClick={handleShowForm}>Add an Dish</button>
        <SearchBar handleSearch={handleSearch} />
        {showForm ? (
          <Form handleSubmit={handleSubmit} />
        ) : (
          <button onClick={handleShowForm}>Show Form</button>
        )}

        {copyFoods.map((el, id) => {
          return <FoodBox key={id} food={el} handleAdd={handleAdd} />;
        })}
      </div>
      <div className="column">
        Today's Food
        <TodaysFood todaysFood={todaysFood} />
      </div>
    </div>
  );
}

export default App;
