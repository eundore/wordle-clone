import store from "../../store";
import { ROW_LENGTH, COLUMN_LENGTH } from "../../constants";

class Tiles extends HTMLElement {
  constructor() {
    super();

    this.init();

    store.subscribe("storage", () => {
      this.render();
    });
  }

  init() {
    for (let i = 0; i < ROW_LENGTH; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.id = `row-${i}`;

      for (let j = 0; j < COLUMN_LENGTH; j++) {
        row.innerHTML += `<div class='tile' data-state='empty'></div>`;
      }

      this.appendChild(row);
    }
  }

  render() {
    const { word, key, index, answer } = store.getState("storage");

    console.log(key, word, index, answer);

    const row = document.getElementById(`row-${index}`);

    if (!row) {
      return;
    }

    if (key) {
      const tile = row.querySelector("[data-state='empty']");

      if (tile) {
        tile.innerHTML = key;
        tile.setAttribute("data-state", "tbd");
      }

      return;
    }

    const tiles = row.querySelectorAll("[data-state='tbd']");

    if (tiles) {
      const lastIndex = tiles.length - 1;
      const lastTile = tiles[lastIndex];

      if (lastTile) {
        lastTile.innerHTML = "";
        lastTile.setAttribute("data-state", "empty");
      }
    }
  }
}

export default function defineTiles() {
  customElements.define("main-tiles", Tiles);
}
