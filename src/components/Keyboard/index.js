import store from "../../store";
import { KEYS, COLUMN_LENGTH, ROW_LENGTH, WORDS } from "../../constants";
import createToast from "../../utils/toast";

class Keyboard extends HTMLElement {
  constructor() {
    super();

    this.init();
    this.render();
    this.addClickEventListener();
    this.addKeyEventListener();
  }

  init() {
    this.word = "";
    this.index = 0;
    this.answer = "";

    this.isEnd = false;
    this.isLast = false;
    this.isNotEnough = true;
    this.isNotWord = true;
    this.isCorrect = false;

    store.subscribe("storage", () => {
      this.updateState();
    });
  }

  render() {
    for (let index in KEYS) {
      let row = document.createElement("div");

      row.classList.add("row");
      for (let key of KEYS[index]) {
        if (typeof key === "string") {
          row.innerHTML += `<button type='button' data-key='${key}' aria-label='add ${key}' aria-disabled='false' class='key'>${key}</button>`;
          continue;
        }

        row.innerHTML += `<button type='button' data-key='${key.data}' aria-label='${key.label}' aria-disabled='true' class='key oneAndHalf'>${key.name}</button>`;
      }

      this.appendChild(row);
    }
  }

  updateState() {
    const { word, index, answer } = store.getState("storage");

    this.word = word;
    this.index = index;
    this.answer = answer;

    this.isEnd = index >= ROW_LENGTH;
    this.isLast = index === ROW_LENGTH - 1;
    this.isNotEnough = word.length < COLUMN_LENGTH;
    this.isNotWord = !WORDS.includes(word);
  }

  addClickEventListener() {
    const keys = this.querySelectorAll(".key:not(.oneAndHalf)");
    const enter = this.querySelector("[aria-label='enter']");
    const backspace = this.querySelector("[aria-label='backspace']");

    for (let key of keys) {
      key.addEventListener("click", () => this.keyEvent(key.dataset.key));
    }
    enter.addEventListener("click", (e) => this.enterkeyEvent());

    backspace.addEventListener("click", () => this.backspaceKeyEvent());
  }

  addKeyEventListener() {
    document.addEventListener("keydown", (e) => {
      if (e.key.match(/^[a-zA-Z]$/)) {
        const key = e.key.toLowerCase();
        this.keyEvent(key);
      }

      if (e.key === "Enter") {
        this.enterkeyEvent();
      }

      if (e.key === "Backspace") {
        this.backspaceKeyEvent();
      }
    });
  }

  keyEvent(key) {
    const { isEnd, isCorrect } = this;

    if (isEnd || isCorrect) {
      return;
    }

    if (this.word.length < COLUMN_LENGTH) {
      store.setState("storage", {
        key,
        word: this.word + key,
      });
    }
  }

  enterkeyEvent() {
    const { isEnd, isLast, isNotEnough, isNotWord, isCorrect } = this;

    if (isEnd || isCorrect) {
      return;
    }

    if (isNotEnough) {
      createToast("Not enough letter!");
      return;
    }

    if (isNotWord) {
      createToast("Not in word list!");
      return;
    }

    const word = [...this.word];
    const answer = [...this.answer];
    const result = [];

    for (let i = 0; i < COLUMN_LENGTH; i++) {
      if (word[i] === answer[i]) {
        result.push("correct");
      } else if (answer.includes(word[i])) {
        result.push("present");
      } else {
        result.push("absent");
      }
    }

    const row = document.getElementById(`row-${this.index}`);

    const tiles = row.querySelectorAll("[data-state='tbd']");

    tiles.forEach((tile, index) => {
      tile.setAttribute("data-state", result[index]);

      const key = document.querySelector(`button[data-key='${word[index]}']`);
      const key_state = key.getAttribute("data-state");

      switch (key_state) {
        case "present":
          if (result[index] === "correct") {
            key.setAttribute("data-state", result[index]);
          }
        case "correct":
          break;
        default:
          key.setAttribute("data-state", result[index]);
          break;
      }
    });

    if (this.word === this.answer) {
      createToast("Congratulations!");
      this.isCorrect = true;
    } else if (isLast) {
      createToast(this.answer, 5000);
    }

    store.setState("storage", {
      index: this.index + 1,
      word: "",
      key: null,
    });
  }

  backspaceKeyEvent() {
    const { isEnd, isCorrect, word } = this;

    if (isEnd || isCorrect) {
      return;
    }

    if (word) {
      store.setState("storage", {
        key: null,
        word: this.word.slice(0, -1),
      });
    }
  }
}

export default function defineKeyboard() {
  customElements.define("main-keyboard", Keyboard);
}
