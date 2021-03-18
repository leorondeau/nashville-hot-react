import React from 'react'
import { OrderList } from '../order/OrderList'
import { RestaurantList } from '../restaurant/RestaurantList'
import { RestaurantDetail } from '../restaurant/RestaurantDetail'
import { RestaurantHeatList } from '../restaurantheat/RestaurantHeatList'
import "./Profile.css"


export const Profile = (props) => {
    return (
        <>
        <div className="profile">
            <div>
                < OrderList {...props} />
            </div>
            <div>
                < RestaurantList  {...props} />
                <RestaurantDetail {...props} />
            </div>
            <RestaurantHeatList {...props} />
        </div>
        </>
    )
}