export const updateWindowSize = () => {
  const hamburgerContainer = document.getElementById(
    "hamburgerContainer"
  ) as HTMLDivElement;
  if (window.innerWidth > 768 && hamburgerContainer) {
    document.body.style.overflow = "visible";
    hamburgerContainer.remove();
  }
};
