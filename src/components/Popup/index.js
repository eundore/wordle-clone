import { ROW_LENGTH, COLUMN_LENGTH } from "../../constants";
import store from "../../store";
import createToast from "../../utils/toast";

class Popup extends HTMLElement {
  constructor() {
    super();

    this.result = "";

    store.subscribe("storage", () => {
      this.render();
    });
  }

  render() {
    const { isCorrect, index, result_emoji } = store.getState("storage");

    if (index < ROW_LENGTH && !isCorrect) {
      return;
    }

    this.style.opacity = 100;
    this.style.zIndex = 1000;

    const today = new Date();
    const currentTime = today.toLocaleString();
    const attempts = index;

    const background = document.createElement("div");
    background.classList.add("background");

    const popup = document.createElement("div");
    popup.classList.add("popup");

    const content = document.createElement("span");

    for (let i = 0; i < result_emoji.length; i++) {
      if (i % COLUMN_LENGTH === 0) {
        this.result += "<br />";
      }

      this.result += result_emoji[i];
    }

    content.innerHTML = `Wordle ${currentTime} ${attempts}/6 <br /><br /><br /> ${this.result}`;

    const shareBtn = document.createElement("button");
    shareBtn.classList.add("share");
    shareBtn.innerHTML = "Share";
    shareBtn.addEventListener("click", () => {
      window.navigator.clipboard
        .writeText(content.innerHTML.replaceAll("<br>", "\n"))
        .then(() => {
          createToast("Copied!");
        });
    });

    const tryAgainBtn = document.createElement("button");
    tryAgainBtn.classList.add("try-again");
    tryAgainBtn.innerHTML = "Try Again";
    tryAgainBtn.addEventListener("click", () => {
      location.reload();
    });

    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btnContainer");
    btnContainer.appendChild(shareBtn);
    btnContainer.appendChild(tryAgainBtn);

    const closeBtn = document.createElement("div");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = `<svg height="20" viewBox="0 0 24 24" width="20"
     xmlns="http://www.w3.org/2000/svg">
    <line x1="1" y1="22" 
          x2="22" y2="1" 
          stroke="white" 
          stroke-width="4"/>
    <line x1="1" y1="1" 
          x2="22" y2="22" 
          stroke="white" 
          stroke-width="4"/>
</svg>`;

    closeBtn.addEventListener("click", () => {
      this.style.opacity = 0;
      this.style.zIndex = -1;
    });

    popup.appendChild(content);
    popup.appendChild(btnContainer);

    background.appendChild(popup);
    background.appendChild(closeBtn);

    this.appendChild(background);
  }
}

export default function definePopup() {
  customElements.define("main-popup", Popup);
}
