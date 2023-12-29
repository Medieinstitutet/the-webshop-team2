import {paymentList } from "../main";

export function createPaymentContainer (){
    const paymentContainer = document.getElementById ("payment-container") as HTMLDivElement;
    paymentContainer.innerHTML ="";
for (let i = 0; i < paymentList.length; i++) {
     
    const flowerDiv = document.createElement("div");
    const flowerImg = document.createElement("img");
    const flowerTitle = document.createElement("h2"); 
    const flowerPrice = document.createElement("p");

    flowerDiv.className = "flowerDiv1";

    flowerImg.src = paymentList[i].img;
    flowerTitle.innerHTML = paymentList[i].title;
    flowerPrice.innerHTML = paymentList[i].price + " kr"; 

    paymentContainer.appendChild(flowerDiv);
    flowerDiv.appendChild(flowerImg);
    flowerDiv.appendChild(flowerTitle);
    flowerDiv.appendChild(flowerPrice);
    

}
}