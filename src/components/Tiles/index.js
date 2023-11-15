class Tiles extends HTMLElement {
  constructor() {
    super();

    for (let i = 0; i < 30; i++) {
      this.innerHTML += `<div class='tile'>${String.fromCharCode(
        i + 65
      )}</div>`;
    }
  }
}

export default function defineTiles() {
  customElements.define("main-tiles", Tiles);
}
