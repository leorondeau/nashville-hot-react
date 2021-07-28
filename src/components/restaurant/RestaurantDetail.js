import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantContext } from './RestaurantProvider'
import "./Restaurant.css"
import "../profile/Profile.css"
import flaming from "./flaming.gif"
// import boltons from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/boltons.png'
// import princes from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/princes.webp'
// import hattiebs from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/hattiebs.png'
// import slowburn from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/slowburn.png'
// import fourdegrees from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/fourdegrees.gif'
// import bigshakes from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/Bigshakes.png'
// import firecracker from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/firecracker.png'
// import flamies from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/flamies.jpeg'
// import helens from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/helens.png'
// import hotstuff from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/hotstuff.png'
// import moores from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/moores.png'
// import partyfowl from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/partyfowl.png'
// import pepperfire from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/pepperfire.webp'
// import scoreboard from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/scoreboard.webp'
// import southernv from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/southernv.webp'
// import bjs from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/bjs.png'
// import behive from '/Users/admin/workspace/nashvillehotindexreact/src/images/nashvillehotlogos/behive.png'

import behive from 'src/components/restaurant/images/behive.png'
/*
    Renders the details of a restaurant once selected from the dropdown
    as well as the heat suggestion for user from the selected restaurant
*/      

export const RestaurantDetail = (props) => {
    const { restaurant, getRestaurantById } = useContext(RestaurantContext)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)
    const image = restaurant.img
 
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
                        <img src={image} className="restaurant__img"></img>
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
