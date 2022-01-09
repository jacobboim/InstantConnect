export const initialState = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    // case "REMOVE_FROM_BASKET":
    //   const index = state.basket.findIndex(
    //     (basketItem) => basketItem.id === action.id
    //   );
    //   let newBasket = [...state.basket];

    //   if (index >= 0) {
    //     newBasket.splice(index, 1);
    //   } else {
    //     console.warn(
    //       `Cant remove product (id ${action.id}) as its not in the basket! `
    //     );
    //   }

    //   return {
    //     ...state,
    //     basket: newBasket,
    //   };

    default:
      return state;
  }
};

export default reducer;
