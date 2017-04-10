import React from 'react'
class Store {
  constructor(initialState){
    this.state = initialState
    this.listeners = []
  }
  // Your implementation here.
  // Hint: Our <App /> component won't directly use this store, but instead the
  // CounterStore is going to inherit from it.

  getState(){
    return this.state;
  }

  addListener(listener) {
    this.listeners.push(listener);
    const removeListener = () => {
      this.listeners = this.listeners.filter((l) => listener !== l);
    };
    return removeListener;

  }

  setState(state){
    this.state = state
    for (const listener of this.listeners) {
      listener(state);
    }
  }

}


module.exports = Store;
