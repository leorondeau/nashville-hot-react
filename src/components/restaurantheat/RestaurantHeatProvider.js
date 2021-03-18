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
    

return (
    <RestaurantHeatContext.Provider 
    value={{ restaurantHeats, restaurantHeat, restaurantHeatByRestaurant, setRestaurantHeat, 
    getRestaurantHeats, getRestaurantHeatById, getRestaurantHeatByRestaurantId, setRestaurantHeatByRestaurant }}>
        {props.children}
    </RestaurantHeatContext.Provider>
) 
}
