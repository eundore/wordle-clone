import onCreateMainPage from "./pages/main";
const app = document.getElementById("app");

const onCreateComponent = (element) => {
  app.insertAdjacentHTML("beforeend", element);
  //event && event();
};

addEventListener("DOMContentLoaded", () => {
  onCreateComponent(onCreateMainPage());
});
