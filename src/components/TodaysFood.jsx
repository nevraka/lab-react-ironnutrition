import React from 'react';

const TodaysFood = ({ todaysFood }) => {
  const total = todaysFood.reduce((sum, el) => {
    return sum + el.quantity * el.calories;
  }, 0);

  return (
    <div>
      {todaysFood.map((tf, id) => {
        return (
          <>
            <li key={id}>
              {tf.quantity}&nbsp;
              {tf.name}={tf.calories * tf.quantity} cal
            </li>
          </>
        );
      })}
      <h1>Total: {total} cal</h1>
    </div>
  );
};

export default TodaysFood;
