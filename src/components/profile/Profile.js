import React, {useEffect, useContext} from 'react'
import { OrderList } from '../order/OrderList'
import { OrderForm } from '../order/OrderForm'
import { RestaurantList } from '../restaurant/RestaurantList'
import { RestaurantDetail } from '../restaurant/RestaurantDetail'
import { RestaurantHeatList } from '../restaurantheat/RestaurantHeatList'
import "./Profile.css"


export const Profile = (props) => {



    return (
        <>
        
            <div className="profile">
                <div className="profile__card">
                    < OrderList {...props} />
                </div>
                <div className="profile__card">
                    < RestaurantList  {...props} />
                    {/* <OrderForm {...props}/> */}
                </div>
                {/* <div className="profile__card">
                    <RestaurantHeatList {...props} />
                </div> */}
            </div>
        </>
    )
}