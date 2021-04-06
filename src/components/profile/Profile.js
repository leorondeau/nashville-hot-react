import React, { useEffect, useContext } from 'react'
import { OrderList } from '../order/OrderList'
import { OrderForm } from '../order/OrderForm'
import { RestaurantList } from '../restaurant/RestaurantList'
import { RestaurantDetail } from '../restaurant/RestaurantDetail'
import { RestaurantHeatList } from '../restaurantheat/RestaurantHeatList'
import { RestaurantHottestList } from '../restaurantheat/RestaurantHeatHottestList'
import "./Profile.css"


export const Profile = (props) => {

    // const { profile, getProfile } = useContext(ProfileContext)

    // useEffect(() => {
    //     getProfile()
    // }, [])

    return (
        <>

            <div className="profile">
                <div className="profile__card">
                    < OrderList {...props} />
                </div>
                <div className="profile__card profile__restaurant-list">
                    < RestaurantList  {...props} />
                </div>
                < RestaurantHottestList {...props} />

            </div>
        </>
    )
}