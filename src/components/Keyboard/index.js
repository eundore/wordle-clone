class Keyboard extends HTMLElement {
  constructor() {
    super();

    this.init();
    this.click();
  }

  init() {
    const KEYS = [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
      [
        { data: "↵", label: "enter", name: "enter" },
        "z",
        "x",
        "c",
        "v",
        "b",
        "n",
        "m",
        {
          data: "←",
          label: "backspace",
          name: '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" class="game-icon" data-testid="icon-backspace"><path fill="#ffffff" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>',
        },
      ],
    ];

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

  click() {
    const keys = this.getElementsByTagName("button");

    for (let key of keys) {
      key.addEventListener("click", (e) => {
        console.log(key.ariaLabel);
      });
    }
  }
}

export default function defineKeyboard() {
  customElements.define("main-keyboard", Keyboard);
}
