import React, { useState } from 'react'

export const RestaurantContext = React.createContext()

export const RestaurantProvider = (props) => {
    const [restaurants, setRestaurants] = useState([])

    const getRestaurants = () => {
        return fetch("http://localhost:8000/restaurants", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`  
            }
        })
            .then(response => response.json())
            .then(setRestaurants)

    }

return (
    <RestaurantContext.Provider 
    value={{ restaurants, setRestaurants}}>
        {props.children}
    </RestaurantContext.Provider>
) 
}
