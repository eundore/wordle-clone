import definHeader from "../../components/Header";
import defineTiles from "../../components/Tiles";
import defineKeyboard from "../../components/Keyboard";

export default function onCreateMainPage() {
  return `<main-header></main-header>
    <main-tiles></main-tiles>
    <main-keyboard></main-keyboard>`;
}

addEventListener("DOMContentLoaded", () => {
  definHeader();
  defineTiles();
  defineKeyboard();
});
