import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { OrderContext } from './OrderProvider'
import { Order } from './Order'
import { ProfileContext } from '../profile/ProfileProvider'

/* 
    Renders five most recent orders from all restaurants
    on page load for logged in user. When restaurant is selected
    the five most recent orders are rendered from that restaurant
    for that logged in user. 
*/

export const OrderList = (props) => {
    const { orders, getLimitedOrdersByUser, getOrdersByUserByRestaurantId } = useContext(OrderContext)
    const { profile, getProfile } = useContext(ProfileContext)

    const [value, setValue] = useState(true)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        if (isNaN(restaurantid) || restaurantid == 0) {
            getLimitedOrdersByUser()


        }
        else {
            (getOrdersByUserByRestaurantId(restaurantid))
        }


    }, [restaurantid])



    return (
        <>


            <section>
                <header className="restaurants__header restaurant">
                    <h4>Nashville Hot Visits</h4>
                </header>
                <button className="mobile__button" onClick={() => {
                    setValue(!value)
                }}>

                    Nashville Hot Visits
                </button>
                <div className={value ? "orderlist-hide" : null}>

                    <div className="restaurant__customer">
                        <h5>{profile.customer.user.first_name}</h5>
                        <h5>{profile.customer.heat_tolerance}</h5>
                    </div>

                    {
                        orders.map(o => (
                            <Order key={o.id} value={o.id} order={o} />
                        ))
                    }

                </div>

            </section>

        </>
    )
}