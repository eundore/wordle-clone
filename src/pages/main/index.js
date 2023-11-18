import definHeader from "../../components/Header";
import defineTiles from "../../components/Tiles";
import defineKeyboard from "../../components/Keyboard";
import definePopup from "../../components/Popup";

export default function onCreateMainPage() {
  return `<main-header></main-header>
    <main-tiles></main-tiles>
    <main-keyboard></main-keyboard>
    <main-popup></main-popup>`;
}

addEventListener("DOMContentLoaded", () => {
  definHeader();
  defineTiles();
  defineKeyboard();
  definePopup();
});
