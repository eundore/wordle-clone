class Header extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `Wordle`;
  }
}

export default function defineMainHeader() {
  customElements.define("main-header", Header);
}
