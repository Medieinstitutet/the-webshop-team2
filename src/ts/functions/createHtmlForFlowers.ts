import {  addToCart,  cartList } from "../main";
import { CartItem } from "../modules/cartItem";
import { Flowers } from "../modules/flowersClass";
import { checkIfCartIsEmpty } from "./checkIfCartIsEmpty";
import { countTotalPrice } from "./countTotalPrice";
import { createHtmlForCart } from "./createHtmlForCart";
import { getCartListLen } from "./getCartListLen";

export function createHtmlForFlowers(flowerList: Flowers[]) {
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

    flowerDiv.id = "flowerDiv";
    flowerDiv.className = "flowerDiv";
    flowerImg.className = "flowerImg";
    flowerTitle.className = "flowerTitle";
    flowerInfo.className = "flowerInfo";
    flowerPrice.className = "flowerPrice";
    flowerBuyBtn.className = "flowerBuyBtn";


    /* const thisId = 0; */ 
    flowerBuyBtn.addEventListener("click", () => {addToCart(flowerList[i])
    const cartItem = new CartItem(flowerList[i], 1);
/*     console.log(cartList);
   console.log(flowerList);
   console.log(cartItem);
    */
   
   
      countTotalPrice();
      getCartListLen();
    });


    flowerDiv.addEventListener ("click", () => {
      const productModal = document.createElement("div");
      const productModalContainer = document.createElement("div");
      const productModalImg = document.createElement("img")
      const productModalTitle = document.createElement("h3")
      const productModalInfo = document.createElement("p")
      const productModalPrice = document.createElement("p")
      const productModalClose = document.createElement("button")
      const addToCartbtn = document.createElement ("button");

      productModalImg.src = flowerList[i].img
      productModalTitle.innerHTML = flowerList[i].title
      productModalInfo.innerHTML = flowerList[i].productinfo
      productModalPrice.innerHTML = flowerList[i].price + " kr"
      addToCartbtn.innerHTML = "Add to cart";

      

      productModal.id = "productModal";
      productModal.className = "productModal";
      productModalClose.className = "bi bi-x-lg";
      productModalClose.id = "productModalClose";
      productModalContainer.className = "productModalContainer";
      productModalImg.className = "productModalContainer__img";

      addToCartbtn.addEventListener("click", () => {
/*           cartList.push(CartItem);
 */          countTotalPrice();
          checkIfCartIsEmpty();
          getCartListLen(); 
      
          
    
    });
      
      if (productModalClose) {        
        productModalClose.addEventListener("click", () =>  {
          productModal.remove();
        })
      }

      document.body.appendChild(productModal);
      productModal.appendChild(productModalContainer)
      productModal.appendChild(productModalImg)
      productModalContainer.appendChild(productModalTitle)
      productModalContainer.appendChild(productModalInfo)
      productModalContainer.appendChild(productModalPrice)
      productModalContainer.appendChild(addToCartbtn)
      productModal.appendChild(productModalClose)
      /* productModal.style.display = "block"; */
    });


    flowerContainer?.appendChild(flowerBtnContainer);
    flowerBtnContainer.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerInfo);
    flowerDiv.appendChild(flowerPrice);
    flowerBtnContainer?.appendChild(flowerBuyBtn);
  }
}


