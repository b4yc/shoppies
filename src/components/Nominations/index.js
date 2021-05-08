import React, { useContext } from "react";
import { CartContext } from "../CartProvider";
import { removeFromCart } from "../../cartReducer";

const Nominations = () => {
  const { cart, dispatch } = useContext(CartContext);
  const removeFromCartHandler = (itemToRemove) =>
    dispatch(removeFromCart(itemToRemove));

  return (
    <div>
      {cart.map((nomination) => {
        return (
          <div>
            {nomination.Title}
            <button
              onClick={() => {
                removeFromCartHandler(nomination);
              }}
            ></button>
          </div>
        );
      })}
    </div>
  );
};

export default Nominations;
