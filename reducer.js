export const initialState={
    basket: [],
    user:null
};
//selector
export const getBasketTotal =(basket) =>
    basket?.reduce((amount,item) => item.price+amount,0);

const reducer =(state,action) =>{
    console.log(action);
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
                basket:[...state.basket,action.item],
            };
            
         case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
              }

        case "REMOVE":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.price === action.price
              );
              let newBasket = [...state.basket];
        
              if (index >= 0) {
                newBasket.splice(index, 1);
        
              } else {
                console.warn(
                  `Cant remove product (id: ${action.price}) as its not in basket!`
                )
              }
        
              return {
                ...state,
                basket: newBasket
              }

        case "SET":
              return{
                ...state,
                user:action.user
              }
        default:
            return state;
    }
};

export default reducer;