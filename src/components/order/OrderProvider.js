import React, { useState } from 'react'

export const OrderContext = React.createContext()

export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])
    // const {order , setOrder }
    
    const getOrder = (id) => {

        return fetch(`http://localhost:8000/orders/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`,
            }
        })
            .then(response => response.json())
    }


    const getOrdersByUser = () => {
        return fetch("http://localhost:8000/orders", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`
            }
        })
            .then(response => response.json())
            .then(setOrders)
    }

    const getLimitedOrdersByUser = () => {
        return fetch("http://localhost:8000/orders?limit=5", {
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

    const createOrder = (order) => {
        return fetch("http://localhost:8000/orders", {
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
        return fetch(`http://localhost:8000/orders/${order.id}`, {
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
        return fetch(`http://localhost:8000/orders/${ orderId }`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`
            }
        })
        .then(getOrdersByUserByRestaurantId(restaurantid))
            
        
    }

    return (
        <OrderContext.Provider
            value={{ orders, deleteOrder, setOrders, getOrder, createOrder, 
            editOrder, getOrdersByUser, getOrdersByUserByRestaurantId, getLimitedOrdersByUser }}>
            {props.children}
        </OrderContext.Provider>
    )

}

