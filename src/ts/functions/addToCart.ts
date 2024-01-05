import { cartList } from "../main";
import { CartItem } from "../modules/cartItemClass";
import { Flowers } from "../modules/flowersClass";

export const addToCart = (flower: Flowers) => {
  const isItemInCart = cartList.find(
    (cartItem) => cartItem.product.id === flower.id
  );
  if (!isItemInCart) {
    const cartItem = new CartItem(flower, 1);
    cartList.push(cartItem);
  } else {
    isItemInCart.quantity++;
  }
};
