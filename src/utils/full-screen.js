export const toggleFullScreen = (element) => {
  if (!document.fullscreen && element && element.requestFullscreen) {
    element.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
};
