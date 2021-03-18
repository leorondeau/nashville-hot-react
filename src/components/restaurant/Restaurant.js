import React from 'react'
import { Link } from 'react-router-dom'


export const Restaurant = ({ restaurant }) => {

    return (
        <>
            <section className="restaurant">
                <div className="restaurant__name" id={`restaurant--${restaurant.id}`}>
                   {restaurant.name}
                </div>
            </section>
        </>
    )
}