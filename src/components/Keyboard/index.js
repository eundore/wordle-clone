class Keyboard extends HTMLElement {
  constructor() {
    super();

    const KEYS = [
      ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
      ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
      [
        "ENTER",
        "Z",
        "X",
        "C",
        "V",
        "B",
        "N",
        "M",
        '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20" class="game-icon" data-testid="icon-backspace"><path fill="#ffffff" d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>',
      ],
    ];

    for (let index in KEYS) {
      let row = document.createElement("div");
      row.classList.add("row");
      for (let key of KEYS[index]) {
        row.innerHTML += `<button type='button' class='key${
          key.length > 1 ? " unique" : ""
        }'>${key}</button>`;
      }
      this.appendChild(row);
    }
  }
}

export default function defineKeyboard() {
  customElements.define("main-keyboard", Keyboard);
}
