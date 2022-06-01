import React, { useContext, useState } from "react";
import OrderContext from "./OrderContext";
import SetOrder from "./SetOrder";

export default function LocalStorage() {
const {yourOrder, setYourOrder} = useContext(OrderContext);
const order = yourOrder.map((order) => (
    <SetOrder
    key={order.id}
    id={order.email}
    guests={order.guests}>

    </SetOrder>
)
)
return(
        <div>{order}</div>
);
}