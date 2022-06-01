import  { createContext} from "react";

const OrderContext = createContext({
    userEmail: null,
    setUserEmail: () => {},
    dishOrder: null,
    setDishOrder: () => {},
    drinkOrder: null,
    setDrinkOrder: () => {},
    date: null,
    setDate: () => {},
    guests: null,
    setGuests: () => {},
    totalOrder: null,
    setTotalOrder: () => {},
});

export default OrderContext;