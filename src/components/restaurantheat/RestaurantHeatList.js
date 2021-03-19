import React, { useContext, useEffect, useState } from 'react'
import { RestaurantHeatContext } from './RestaurantHeatProvider'
import "./RestaurantHeat.css"
import Dropdown from 'react-bootstrap/Dropdown'



export const RestaurantHeatList = (props) => {
    const { restaurantHeatByRestaurant, getRestaurantHeatByRestaurantId } = useContext(RestaurantHeatContext)
    // const [currentRestaurant, setCurrentRestaurant] = useState("")

    const restaurantid = parseInt(props.history.location.pathname.split("/")[3])


    useEffect(() => {
        if(isNaN(restaurantid)) {
        
        } 
        else {
        getRestaurantHeatByRestaurantId(restaurantid)
        }
    }, [restaurantid])


    return (
        <>
            <section>
                <header className="restaurants__header restaurant">
                    <h4>Nashville Hot Average</h4>
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