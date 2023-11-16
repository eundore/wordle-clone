import store from "../../store";
import { KEYS, COLUMN_LENGTH, ROW_LENGTH, WORDS } from "../../constants";

class Keyboard extends HTMLElement {
  constructor() {
    super();

    this.init();
    this.render();
    this.addEventListener();

    store.subscribe("storage", () => {
      this.updateState();
    });
  }

  init() {
    this.word = "";
    this.index = 0;
    this.answer = "";
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
  }

  addEventListener() {
    const keys = this.querySelectorAll(".key:not(.oneAndHalf)");
    const enter = this.querySelector("[aria-label='enter']");
    const backspace = this.querySelector("[aria-label='backspace']");

    for (let key of keys) {
      key.addEventListener("click", () => {
        if (this.index >= ROW_LENGTH) {
          return;
        }

        if (this.word.length < COLUMN_LENGTH) {
          store.setState("storage", {
            key: key.dataset.key,
            word: this.word + key.dataset.key,
          });
        }
      });
    }

    enter.addEventListener("click", () => {
      if (this.index >= ROW_LENGTH) {
        return;
      }

      if (this.word.length < COLUMN_LENGTH) {
        console.log("not yet!");
        return;
      }

      if (!WORDS.includes(this.word)) {
        console.log("not in word list!");
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

      store.setState("storage", {
        index: this.index + 1,
        word: "",
        key: null,
      });
    });

    backspace.addEventListener("click", () => {
      if (this.index >= ROW_LENGTH) {
        return;
      }

      if (this.word) {
        store.setState("storage", {
          key: null,
          word: this.word.slice(0, -1),
        });
      }
    });
  }
}

export default function defineKeyboard() {
  customElements.define("main-keyboard", Keyboard);
}
