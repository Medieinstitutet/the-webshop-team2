import { cartList } from "./main";

export function toggleHamburger() {
  const navbar = document.getElementById("navbar");
  const toggleTest = () => {
    navbar?.classList.toggle("hamburger-on");
  };
  toggleTest();
}

export function createHtmlForFlowers(flowerList: any) {
  const flowerContainer = document.getElementById("flower-container");

  for (let i = 0; i < flowerList.length; i++) {
    const flowerBtnContainer = document.createElement("div");

    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerInfo = document.createElement("p");
    const flowerPrice = document.createElement("p");
    const flowerBuyBtn = document.createElement("button");

    flowerImg.src = flowerList[i].img;
    flowerTitle.innerHTML = flowerList[i].title;
    flowerInfo.innerHTML = flowerList[i].info;
    flowerPrice.innerHTML = flowerList[i].price + " kr";
    flowerBuyBtn.innerHTML = "Buy";

    flowerDiv.className = "flowerDiv";
    flowerImg.className = "flowerImg";
    flowerTitle.className = "flowerTitle";
    flowerInfo.className = "flowerInfo";
    flowerPrice.className = "flowerPrice";
    flowerBuyBtn.className = "flowerBuyBtn";

    flowerBuyBtn.addEventListener("click", addToCart);
    function addToCart() {
      cartList.push(flowerList[i]);
      console.log(cartList);
    }

    flowerContainer?.appendChild(flowerBtnContainer);
    flowerBtnContainer.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerInfo);
    flowerDiv.appendChild(flowerPrice);
    flowerBtnContainer?.appendChild(flowerBuyBtn);
  }
}

export function createHtmlForFlowers2(flowerList2: any) {
  const flowerContainer2 = document.getElementById("flower-container2");

  for (let i = 0; i < flowerList2.length; i++) {
    const flowerBtnContainer2 = document.createElement("div");

    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerInfo = document.createElement("p");
    const flowerPrice = document.createElement("p");
    const flowerBuyBtn = document.createElement("button");

    flowerImg.src = flowerList2[i].img;
    flowerTitle.innerHTML = flowerList2[i].title;
    flowerInfo.innerHTML = flowerList2[i].info;
    flowerPrice.innerHTML = flowerList2[i].price + " kr";
    flowerBuyBtn.innerHTML = "Buy";

    flowerDiv.className = "flowerDiv";
    flowerImg.className = "flowerImg";
    flowerTitle.className = "flowerTitle";
    flowerInfo.className = "flowerInfo";
    flowerPrice.className = "flowerPrice";
    flowerBuyBtn.className = "flowerBuyBtn";

    flowerBuyBtn.addEventListener("click", addToCart);
    function addToCart() {
      cartList.push(flowerList2[i]);
      console.log(cartList);
    }

    flowerContainer2?.appendChild(flowerBtnContainer2);
    flowerBtnContainer2.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerInfo);
    flowerDiv.appendChild(flowerPrice);
    flowerBtnContainer2.appendChild(flowerBuyBtn);
  }
}

export function createHtmlForCart(cartList: any) {
  const cartContainer = document.getElementById("cart-container");

  for (let i = 0; i < cartList.length; i++) {
    /*     const flowerBtnContainer2 = document.createElement("div");
     */
    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2");
    const flowerPrice = document.createElement("p");

    flowerImg.src = cartList[i].img;
    flowerTitle.innerHTML = cartList[i].title;
    flowerPrice.innerHTML = cartList[i].price + " kr";

    flowerDiv.className = "flowerDiv";
    flowerImg.className = "flowerImg";
    flowerTitle.className = "flowerTitle";
    flowerPrice.className = "flowerPrice";

    /*     flowerContainer2?.appendChild(flowerBtnContainer2);
     */ cartContainer?.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
  }
}
