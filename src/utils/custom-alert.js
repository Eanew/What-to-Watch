export const showCustomAlert = function (alert, timeout = 3000, color = `orange`) {
  const message = document.createElement(`div`);

  message.style.background = color;
  message.style.position = `absolute`;
  message.style.fontSize = `20px`;
  message.style.textAlign = `center`;
  message.style.padding = `15px`;
  message.style.left = `0`;
  message.style.right = `0`;
  message.style.zIndex = `500`;

  message.textContent = alert;

  document.body.insertAdjacentElement(`afterbegin`, message);
  window.setTimeout(() => message.remove(), timeout);
};
