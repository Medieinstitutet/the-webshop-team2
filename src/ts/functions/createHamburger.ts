export const createHamburger = () => {
  const hamburgerBtn = document.getElementById(
    "hamburger-btn"
  ) as HTMLButtonElement;

  hamburgerBtn.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    const hamburgerContainer = document.createElement("div");
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
      hamburgerContainer.remove();
    });

    bestSellingLink.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      hamburgerContainer.remove();
    });

    productsLink.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      hamburgerContainer.remove();
    });

    closeHumMenu.addEventListener("click", () => {
      document.body.style.overflow = "visible";
      hamburgerContainer.remove();
    });
    hamburgerContainer.className = "hamburgerContainer";
    closeHumMenu.className = "bi bi-x-lg hamburgerContainer__closeBtn";
    startLink.className ="hamburgerContainer__startLink";
    bestSellingLink.className ="hamburgerContainer__startLink";
    productsLink.className = "hamburgerContainer__startLink";

    document.body.appendChild(hamburgerContainer);
    hamburgerContainer.appendChild(closeHumMenu);
    hamburgerContainer.appendChild(startLink);
    hamburgerContainer.appendChild(bestSellingLink);
    hamburgerContainer.appendChild(productsLink);
  });
};
