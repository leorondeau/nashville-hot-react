import React from 'react'
import { Link } from 'react-router-dom'


export const RestaurantHeat = ({ restaurantheat }) => {

    return (
        <>
            <section className="restaurantheat">
                <div className="restaurantheat__name" id={`restaurant--${restaurantheat.id}`}>
                    {restaurantheat.name}</div>
                <div>{restaurantheat.average_rating}</div>
            </section>
        </>
    )
}