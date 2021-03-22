import React, { useState } from 'react'

export const RestaurantHeatContext = React.createContext()

export const RestaurantHeatProvider = (props) => {
    const [restaurantHeats, setRestaurantHeats] = useState([])
    const [restaurantHeat, setRestaurantHeat ] = useState({})
    const [restaurantHeatByRestaurant, setRestaurantHeatByRestaurant ] = useState([])

    const getRestaurantHeats = () => {
        return fetch("http://localhost:8000/restaurantheats", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`  
            }
        })
            .then(response => response.json())
            .then(setRestaurantHeats)

    }

    const getRestaurantHeatById = (id) => {
        return fetch(`http://localhost:8000/restaurantheats/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`  
            }
        })
            .then(response => response.json())
            .then(setRestaurantHeat)

    }

    const getRestaurantHeatByRestaurantId = (restaurantid) => {
        return fetch(`http://localhost:8000/restaurantheats/${restaurantid}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`  
            }
        })
            .then(response => response.json())
            .then(setRestaurantHeatByRestaurant)

    }
    
    const rateRestaurantHeat = (restaurantheatid, rating) => {
        return fetch(`http://localhost:8000/restaurantheats/${restaurantheatid}/rate`, {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(rating)
        })
        .then(setRestaurantHeat)
    }

return (
    <RestaurantHeatContext.Provider 
    value={{ restaurantHeats, restaurantHeat, restaurantHeatByRestaurant, setRestaurantHeat, 
    getRestaurantHeats, getRestaurantHeatById, getRestaurantHeatByRestaurantId, setRestaurantHeatByRestaurant,
    rateRestaurantHeat }}>
        {props.children}
    </RestaurantHeatContext.Provider>
) 
}
