import React from 'react'
import { Link } from 'react-router-dom'

/* User name that is rendered in active users profile for people that the active user
is watching */

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