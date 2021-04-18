import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'

/*
    Restaurant heat card that renders average rating in 
    RestaurantHeatList.js (when restaurant is selected) and 
    RestaurantHeatHottestList.js (on log in)
*/


export const RestaurantHeat = ({ restaurantheat }) => {
    const params = useParams()
    return (
        <>
                <div className="restaurant__hottest">
                    {
                        ("restaurantId" in params)
                        ? null
                        : <div>{restaurantheat.restaurant.name}</div>
                    }
                </div>
            <section className="restaurantheat">
                <div className="restaurantheat__name" id={`restaurant--${restaurantheat.id}`}>{restaurantheat.name}</div>
                <div>{restaurantheat.average_rating}</div>
            </section>
        </>
    )
}