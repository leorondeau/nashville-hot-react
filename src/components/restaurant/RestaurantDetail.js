import React, { useContext, useEffect } from 'react'
import { RestaurantContext } from './RestaurantProvider'
import { Link } from "react-router-dom"
import "./Restaurant.css"
import "../profile/Profile.css"

export const RestaurantDetail = (props) => {
    const { restaurant, getRestaurantById } = useContext(RestaurantContext)
    // const [restaurant, setRestaurant ] = useState({heatlevels: {}})

    const restaurantid = parseInt(props.history.location.pathname.split("/")[3])
    const restauranturl = props.history.location.pathname.split("/")[1]

    useEffect(() => {
        if(isNaN(restaurantid)) {} 
        else {getRestaurantById(restaurantid)}
    }, [restaurantid])

    return (
        <section className="restaurant ">
            <div className="restaurant__detail">
                <div className="restaurant__website">
                    <a href={restaurant.website} >{restaurant.website}</a>
                </div>
                <div >
                    <img src={`${restaurant.img}`} className="restaurant__img"></img>
                </div>
            </div>
        </section>
    )
}
