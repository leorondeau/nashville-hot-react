import React, { useContext, useEffect, useState } from 'react'
import { RestaurantHeatContext } from './RestaurantHeatProvider'

import Dropdown from 'react-bootstrap/Dropdown'



export const RestaurantHeatList = (props) => {
    const { restaurantHeatByRestaurant, getRestaurantHeatByRestaurantId } = useContext(RestaurantHeatContext)
    // const [currentRestaurant, setCurrentRestaurant] = useState("")

    const restaurantid = parseInt(props.history.location.pathname.split("/")[3])


    useEffect(() => {
        getRestaurantHeatByRestaurantId(restaurantid)

    }, [restaurantid])


    return (
        <>
            <section>
                <header className="restaurants__header restaurant">
                    <h1>Averages</h1>
                </header>
                <div>
                    {
                        restaurantHeatByRestaurant.map(rh => (
                            <div key={rh.id} value={rh.id}>{rh.name} </div>
                        ))
                    }
                </div>
            </section>

        </>
    )
}