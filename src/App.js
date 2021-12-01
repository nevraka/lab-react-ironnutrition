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
    e.preventdefault();
    let newFood = {
      name: e.target.title.value,
      calories: e.target.price.value,
      image: e.target.image.value,
    };
    setFoodArray([newFood, ...foodArray]);
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
    // Create our object with quantity
    let todaysDish = {
      name: food.name,
      quantity: quantity,
      calories: food.calories,
    };
    setTodaysFood([todaysDish, ...todaysFood]);
  };

  return (
    <div class="columns">
      <div class="column">
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
      <div class="column">
        Today's Food
        <TodaysFood todaysFood={todaysFood} />
      </div>
    </div>
  );
}

export default App;
