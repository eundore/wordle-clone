import { WORDS } from "../constants";

class Store {
  constructor() {
    const randomIndex = Math.floor(Math.random() * WORDS.length);

    console.log(WORDS[randomIndex]);

    this.state = {
      storage: {
        index: 0,
        answer: WORDS[randomIndex],
        result_emoji: [],
      },
    };
    this.listeners = {};
  }

  getState(key) {
    return this.state[key];
  }

  setState(key, newState) {
    this.state[key] = {
      ...this.state[key],
      ...newState,
    };
    this.notify(key);
  }

  subscribe(key, listener) {
    if (!this.listeners[key]) {
      this.listeners[key] = [];
    }
    this.listeners[key].push(listener);
  }

  unsubscribe(key, listener) {
    if (this.listeners[key]) {
      const index = this.listeners[key].indexOf(listener);
      if (index !== -1) {
        this.listeners[key].splice(index, 1);
      }
    }
  }

  notify(key) {
    if (this.listeners[key]) {
      this.listeners[key].forEach((listener) => listener());
    }
  }
}

const store = new Store();

export default store;
