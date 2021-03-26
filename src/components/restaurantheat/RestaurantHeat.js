import React from 'react'
import { Link } from 'react-router-dom'
import { useParams, useHistory } from 'react-router-dom'


export const RestaurantHeat = ({ restaurantheat }) => {
    const params = useParams()
    return (
        <>
                <div>
                    {
                        ("restaurantId" in params)
                        ? <div></div>
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