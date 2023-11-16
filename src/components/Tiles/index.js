class Tiles extends HTMLElement {
  constructor() {
    super();

    this.init();
  }

  init() {
    for (let i = 0; i < 30; i++) {
      this.innerHTML += `<div class='tile'></div>`;
    }
  }
}

export default function defineTiles() {
  customElements.define("main-tiles", Tiles);
}
