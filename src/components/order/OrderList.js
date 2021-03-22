import React, { useContext, useEffect, useState } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { OrderContext } from './OrderProvider'
import { Order } from './Order'
import Dropdown from 'react-bootstrap/Dropdown'



export const OrderList = (props) => {
    const { orders, getOrdersByUser, getOrdersByUserByRestaurantId } = useContext(OrderContext)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)


    useEffect(() => {
        if (isNaN(restaurantid) || restaurantid == 0) {
            getOrdersByUser()
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
                {
                    orders.map(o => (
                        <Order key={o.id} value={o.id} order={o} />
                    ))
                }
            </section>

        </>
    )
}