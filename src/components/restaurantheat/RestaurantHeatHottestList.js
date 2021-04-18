import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantHeatContext } from './RestaurantHeatProvider'
import { RestaurantHeat } from './RestaurantHeat'
import "./RestaurantHeat.css"
import Dropdown from 'react-bootstrap/Dropdown'

/*
    Renders the overall hottest average heats on log in
*/

export const RestaurantHottestList = (props) => {
    const { restaurantHeats, getRestaurantHeats } = useContext(RestaurantHeatContext)
    const [value, setValue] = useState(true)
    const params = useParams()
    const history = useHistory()



    useEffect(() => {
        getRestaurantHeats()
    }, [])

    const sortedHeats = restaurantHeats.sort((a,b) => b.average_rating - a.average_rating)
    const topFive = sortedHeats.slice(0,5)
    return (
        <>
            <section>
                <header className="restaurants__header restaurant">
                    <h4>Nashville's Hottest</h4>
                </header>
                <button className="mobile__button" onClick={() => {
                    setValue(!value)}}>Nashville's Hottest</button>                

                <div className={value ? "orderlist-hide" : null} >
                    {
                        topFive.map(rh => (
                            <RestaurantHeat key={rh.id} restaurantheat={rh} className="restaurant__hottest"/>))
                    }
                </div>
            </section>
        </>
    )
}