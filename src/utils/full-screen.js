export const toFullScreen = (element) => {
  if (element.requestFullScreen) {
    element.requestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  }
};

export const cancelFullScreen = () => {
  if (document.cancelFullScreen) {
    document.cancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  }
};

export const toggleFullScreen = (element) => {
  if (!document.mozFullScreen && !document.webkitFullscreenElement) {
    if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else {
      element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    }
  }
};
