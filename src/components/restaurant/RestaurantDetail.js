import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantContext } from './RestaurantProvider'
import "./Restaurant.css"
import "../profile/Profile.css"
import flaming from "./flaming.gif"
import boltons from './boltons.png'
import behive from './behive.png'
import Bigshakes from './Bigshakes.png'
import bjs from './bjs.png'
import firecracker from './firecracker.png'
import flamies from './flamies.jpeg'
import fourhdegrees from './fourhdegrees'
import hattiebs from './hattiebs.png'
import helens from './helens.png'
import hotstuff from './hotstuff.png'
import moores from './moores.png'
import partyfowl from './partyfowl.png'
import pepperfire from './pepperfire.webp'
import princes from './princes.webp'

/*
    Renders the details of a restaurant once selected from the dropdown
    as well as the heat suggestion for user from the selected restaurant
*/      

export const RestaurantDetail = (props) => {
    const { restaurant, getRestaurantById } = useContext(RestaurantContext)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)
    
    
    useEffect(() => {
        if (restaurantid === 0) {history.push("/")}
        else { getRestaurantById(restaurantid) }
    }, [restaurantid])
    return (
        <section className="restaurant ">
            <div className="restaurant__detail">
                <div className="restaurant__website">
                    <a href={restaurant.website}>{restaurant.website}</a>
                </div>
                <div className="image">

            {console.log('image', restaurant.img)}
                    <div >
                        <img src={restaurant.img} className="restaurant__img"></img>
                    </div>
                </div>
                <h5>Heat Suggestion:</h5>
                <div className="suggested-heat-wrapper">
                    <img src={flaming} className="badass-flame"></img>
                    <h3 className="restaurant__suggested_heat"> {restaurant.suggested_heat}</h3>
                    <img src={flaming} className="badass-flame"></img>
                </div>
            </div>
        </section>
    )
}
