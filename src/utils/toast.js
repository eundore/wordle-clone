export default function createToast(message, timer = 1500) {
  const toast = document.getElementById("toast");

  const messageContainer = document.createElement("div");
  messageContainer.textContent = message;

  toast.appendChild(messageContainer);

  setTimeout(function () {
    toast.removeChild(messageContainer);
  }, timer);
}
