export const createMenu = () => {
  const hamburgerBtn = document.getElementById(
    "hamburger-btn"
  ) as HTMLButtonElement;

  hamburgerBtn.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    const humMenu = document.createElement("div");
    const closeHumMenu = document.createElement("button");
    const startLink = document.createElement("a");
    const bestSellingLink = document.createElement("a");
    const productsLink = document.createElement("a");

    startLink.setAttribute("href", "/index.html");
    bestSellingLink.setAttribute("href", "#preview-container");
    productsLink.setAttribute("href", "#products");

    startLink.innerHTML = "Start";
    bestSellingLink.innerHTML = "Best selling";
    productsLink.innerHTML = "Products";

    startLink.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      humMenu.remove();
    });

    bestSellingLink.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      humMenu.remove();
    });

    productsLink.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      humMenu.remove();
    });

    closeHumMenu.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      humMenu.remove();
    });
    humMenu.className = "humMenu";
    closeHumMenu.className = "bi bi-x-lg humMenu__closeBtn";
    document.body.appendChild(humMenu);
    humMenu.appendChild(closeHumMenu);
    humMenu.appendChild(startLink);
    humMenu.appendChild(bestSellingLink);
    humMenu.appendChild(productsLink);
  });
};
