const initialState = [];

export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("localCart")) || initialValue;

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(state);
      console.log(action.item);
      return [...state, { ...action.item }];

    case "REMOVE_FROM_CART":
      return state.filter((item) => item !== action.item);

    case "CLEAR_CART":
      localStorage.removeItem("localCart");
      return initialState;

    default:
      return state;
  }
};

export const addToCart = (item) => ({
  type: "ADD_TO_CART",
  item,
});

export const removeFromCart = (item) => ({
  type: "REMOVE_FROM_CART",
  item,
});

export const clearCart = () => ({
  type: "CLEAR_CART",
});
