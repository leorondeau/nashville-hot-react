import React, { useState } from 'react'

export const RestaurantHeatContext = React.createContext()

/* 
    HTTP requests to the server that query the RestaurantHeat table
*/


export const RestaurantHeatProvider = (props) => {
    const [restaurantHeats, setRestaurantHeats] = useState([])
    const [restaurantHeat, setRestaurantHeat ] = useState({restaurant:{name:{}}})
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

    const getRestaurantHeatByHottest = () => {

        return fetch(`http://localhost:8000/posts?sortby=hottest`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`  
            }
        })
            .then(response => response.json())
            .then(setRestaurantHeats)
    }
    

return (
    <RestaurantHeatContext.Provider 
    value={{ restaurantHeats, restaurantHeat, restaurantHeatByRestaurant, setRestaurantHeat, 
    getRestaurantHeats, getRestaurantHeatById, getRestaurantHeatByHottest, getRestaurantHeatByRestaurantId, setRestaurantHeatByRestaurant }}>
        {props.children}
    </RestaurantHeatContext.Provider>
) 
}
