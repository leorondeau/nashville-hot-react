import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantHeatContext } from './RestaurantHeatProvider'
import { RestaurantHeat } from './RestaurantHeat'
import "./RestaurantHeat.css"
import Dropdown from 'react-bootstrap/Dropdown'



export const RestaurantHottestList = (props) => {
    const { restaurantHeats, getRestaurantHeats } = useContext(RestaurantHeatContext)
    // const [currentRestaurant, setCurrentRestaurant] = useState("")
    const params = useParams()
    const history = useHistory()


    // const restaurantid = parseInt(props.history.location.pathname.split("/")[3])
    // const restaurantid = parseInt(params.restaurantId)

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
                <div>
                    {
                        topFive.map(rh => (
                            <RestaurantHeat key={rh.id} restaurantheat={rh} />))

                    }
                </div>
            </section>
        </>
    )
}