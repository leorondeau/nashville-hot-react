import React, { useState } from 'react'

export const OrderContext = React.createContext()

/* 
    HTTP requests to server that query Order table 
*/

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])


    const getOrder = (id) => {

        return fetch(`https://whispering-hollows-65332.herokuapp.com/orders/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`,
            }
        })
            .then(response => response.json())
    }


    const getOrdersByUser = () => {
        return fetch("https://whispering-hollows-65332.herokuapp.com/orders", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`
            }
        })
            .then(response => response.json())
            .then(setOrders)
    }

    const getLimitedOrdersByUser = () => {
        return fetch("https://whispering-hollows-65332.herokuapp.com/orders?limit=5", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`
            }
        })
            .then(response => response.json())
            .then(setOrders)
    }

    const getOrdersByUserByRestaurantId = (restaurantid) => {
        return fetch(`https://whispering-hollows-65332.herokuapp.com/orders?restaurantid=${restaurantid}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`,

            }
        })
            .then(response => response.json())
            .then(setOrders)
    }

    const createOrder = (order) => {
        return fetch("https://whispering-hollows-65332.herokuapp.com/orders", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`,
                "Content-Type": "application/json"
            },
            // assigning the value to body. stringify takes a object as a param and returns a json string 
            body: JSON.stringify(order)
        })
            .then(getOrdersByUserByRestaurantId(order.restaurantId))
    }

    const editOrder = (order) => {
        return fetch(`https://whispering-hollows-65332.herokuapp.com/orders/${order.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(getOrdersByUserByRestaurantId(order.restaurantId))
    }

    const deleteOrder = (orderId, restaurantid) => {
        return fetch(`https://whispering-hollows-65332.herokuapp.com/orders/${orderId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`
            }
        })
            .then(getOrdersByUserByRestaurantId(restaurantid))


    }

    return (
        <OrderContext.Provider
            value={{
                orders, deleteOrder, setOrders, getOrder, createOrder,
                editOrder, getOrdersByUser, getOrdersByUserByRestaurantId, getLimitedOrdersByUser
            }}>
            {props.children}
        </OrderContext.Provider>
    )

}

