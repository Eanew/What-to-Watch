export const showCustomAlert = function (alert, timeout = 3000, color = `orange`) {
  const message = document.createElement(`div`);

  message.style = {
    background: color,
    position: `absolute`,
    fontSize: `20px`,
    textAlign: `center`,
    padding: `15px`,
    left: `0`,
    right: `0`,
    zIndex: `500`,
  };

  message.textContent = alert;

  document.body.insertAdjacentElement(`afterbegin`, message);
  window.setTimeout(() => message.remove(), timeout);
};
