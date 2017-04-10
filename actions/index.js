import React from 'react'
import counterStore from '../stores/counterStore'
// Your implementation here.
// Hint: We need two actions!
let increment = () => {
  counterStore.increment();
}

let decrement = () => {
  counterStore.decrement();
}

module.exports = {
  increment, decrement
};
