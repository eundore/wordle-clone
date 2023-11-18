import onCreateMainPage from "./pages/main";
const app = document.getElementById("app");

const onCreateComponent = (element) => {
  app.insertAdjacentHTML("beforeend", element);
};

addEventListener("DOMContentLoaded", () => {
  onCreateComponent(onCreateMainPage());
});
