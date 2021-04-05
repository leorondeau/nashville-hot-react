import React, { useContext, useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { RestaurantHeatContext } from './RestaurantHeatProvider'
import { RestaurantHeat } from './RestaurantHeat'
import "./RestaurantHeat.css"
import Dropdown from 'react-bootstrap/Dropdown'



export const RestaurantHeatList = (props) => {
    const { restaurantHeatByRestaurant, getRestaurantHeatByRestaurantId } = useContext(RestaurantHeatContext)
    // const [currentRestaurant, setCurrentRestaurant] = useState("")
    const params = useParams()
    const history = useHistory()


    // const restaurantid = parseInt(props.history.location.pathname.split("/")[3])
    const restaurantid = parseInt(params.restaurantId)

    useEffect(() => {
        if(isNaN(restaurantid) || restaurantid == 0) {
        } else {getRestaurantHeatByRestaurantId(restaurantid)}
    }, [restaurantid])


    return (
        <>
            <section>
                <header className="restaurants__header restaurant">
                    <h4>Averages</h4>
                </header>
                <div>
                    {
                        restaurantHeatByRestaurant.map(rh => (
                            <RestaurantHeat key={rh.id} restaurantheat={rh} />))
                        
                    }
                </div>
            </section>
        </>
    )
}