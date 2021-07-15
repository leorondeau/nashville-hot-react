import React, { useState } from 'react'

export const RestaurantContext = React.createContext()

/* 
    HTTP requests to the server that query the Restaurant table
*/


export const RestaurantProvider = (props) => {
    const [restaurants, setRestaurants] = useState([])
    const [restaurant, setRestaurant ] = useState({})

    const getRestaurants = () => {
        return fetch("http://whispering-hollows-65332.herokuapp.com/restaurants", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`  
            }
        })
            .then(response => response.json())
            .then(setRestaurants)

    }

    const getRestaurantById = (id) => {
        return fetch(`http://whispering-hollows-65332.herokuapp.com/restaurants/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}` ,              
            }
        })
            .then(response => response.json())
            .then(setRestaurant)

    }
    

return (
    <RestaurantContext.Provider 
    value={{ restaurants, restaurant, setRestaurants, setRestaurant, getRestaurants, getRestaurantById}}>
        {props.children}
    </RestaurantContext.Provider>
) 
}
