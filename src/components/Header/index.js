class Header extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `Wordle`;
  }
}

export default function definHeader() {
  customElements.define("main-header", Header);
}
