export default function onCreateMainPage() {
  const element = document.createElement("div");
  element.insertAdjacentHTML(
    "beforeend",
    `<main-header></main-header>
    <main-tiles></main-tiles>
    <main-keyboard></main-keyboard>
  `
  );

  return element;
}
