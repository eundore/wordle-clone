import onCreateMainPage from "./pages/main";
import defineMainHeader from "./components/Header";
import defineTiles from "./components/Tiles";
import defineKeyboard from "./components/Keyboard";

const app = document.getElementById("app");

const onCreateComponent = (element) => {
  app.appendChild(element);
  //event && event();
};

addEventListener("DOMContentLoaded", () => {
  defineMainHeader();
  defineTiles();
  defineKeyboard();

  onCreateComponent(onCreateMainPage());
});
