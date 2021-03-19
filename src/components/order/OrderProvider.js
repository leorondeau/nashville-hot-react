import React, { useState } from 'react'

export const OrderContext = React.createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])
    // const [order, setOrder] = useState([])

    const getOrdersByUser = () => {
        return fetch("http://localhost:8000/orders", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`
            }
        })
            .then(response => response.json())
            .then(setOrders)
    }

    const getOrdersByUserByRestaurantId = (restaurantid) => {
        return fetch(`http://localhost:8000/orders?restaurantid=${restaurantid}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`,
                
            }
        })
            .then(response => response.json())
            .then(setOrders)
    }

    return (
        <OrderContext.Provider
            value={{ orders, setOrders, getOrdersByUser, getOrdersByUserByRestaurantId }}>
            {props.children}
        </OrderContext.Provider>
    )

}

