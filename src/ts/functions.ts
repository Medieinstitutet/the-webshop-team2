import { cartList} from "./main";

export function toggleHamburger() {
  const navbar = document.getElementById("navbar");
  const toggleTest = () => {
    navbar?.classList.toggle("hamburger-on");
    navbar?.classList.toggle("hamburger-off");
  };

  toggleTest();
}

export function createHtmlForFlowers (flowerList:any) {
  const flowerContainer = document.getElementById("flower-container");

  for (let i = 0; i < flowerList.length; i++){
    console.log(flowerList[i]);
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

    
    flowerBuyBtn.addEventListener("click", addToCart);
    function addToCart (){
      cartList.push(flowerList[i]);
      console.log(cartList);
    }
    
    
    flowerContainer?.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerInfo);
    flowerDiv.appendChild(flowerPrice);
    flowerDiv.appendChild(flowerBuyBtn);
  }
}

export function createHtmlForFlowers2 (flowerList2:any) {
  const flowerContainer = document.getElementById("flower-container");
  
  for (let i = 0; i < flowerList2.length; i++){
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

    flowerBuyBtn.addEventListener("click", addToCart);
    function addToCart (){
      cartList.push(flowerList2[i]);
      console.log(cartList);
    }

    flowerContainer?.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerInfo);
    flowerDiv.appendChild(flowerPrice);
    flowerDiv.appendChild(flowerBuyBtn);
  }
}

