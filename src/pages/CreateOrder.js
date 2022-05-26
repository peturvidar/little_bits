import React, { useContext, useState } from "react";
import OrderContext from "./OrderContext";

const Text = styled.div`
color: #C16757;
font-size: 30px;
font-family: "Playfair Display";
font-weight: bold;
margin-top: 20px;
`;

export default function CreateOrder() {
    const { order } = useContext(OrderContext);
    const totalOrder = order.map((email) => {
        <CreateOrder
        key={email.id}
        id={email.id}
        />
    })
    return (
        <Text>{totalOrder}</Text>
    )
}