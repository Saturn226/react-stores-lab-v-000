import React from 'react'
import Store from './Store'
class CounterStore extends Store {
  constructor(props){
    super(0)
  }
  // Your implementation here.
  // Hint: extend the Store class!

  increment(){
    let newState = this.getState() + 1
    this.setState(newState)
  }

  decrement(){
    let newState = this.getState() -  1
    this.setState(newState)
  }
}

module.exports = new CounterStore();
