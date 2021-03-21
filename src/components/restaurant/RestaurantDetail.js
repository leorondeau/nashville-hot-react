import React, { useContext, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { RestaurantContext } from './RestaurantProvider'
import "./Restaurant.css"
import "../profile/Profile.css"

export const RestaurantDetail = (props) => {
    const { restaurant, getRestaurantById } = useContext(RestaurantContext)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)

    useEffect(() => {
        if( restaurantid == 0) {
            history.push("/")
        } 
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
