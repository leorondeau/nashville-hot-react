import React, { useContext, useEffect } from 'react'
import { RestaurantContext } from './RestaurantProvider'
import { Link } from "react-router-dom"
import "./Restaurant.css"
import "../profile/Profile.css"

export const RestaurantDetail = (props) => {
    const { restaurant, getRestaurantById } = useContext(RestaurantContext)
    // const [restaurant, setRestaurant ] = useState({heatlevels: {}})

    const restaurantid = parseInt(props.history.location.pathname.split("/")[3])

    useEffect(() => {
        getRestaurantById(restaurantid)


    }, [restaurantid])

    return (
        <section className="restaurant">
            <div>
                <img src={`${restaurant.img}`} className="restaurant__img"></img>
            </div>
            <a href={restaurant.website} className="restaurant__website">{restaurant.website}</a>
        </section>
    )
}