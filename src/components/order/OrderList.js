import React, { useContext, useEffect, useState } from 'react'
import { OrderContext } from './OrderProvider'
import { Order } from './Order'
import Dropdown from 'react-bootstrap/Dropdown'



export const OrderList = (props) => {
    const { orders, getOrdersByUser, getOrdersByUserByRestaurantId } = useContext(OrderContext)
    // const [order, setOrder] = useState({})
    // const [orders, setOrders] = useState([])

    const restaurantid = parseInt(props.history.location.pathname.split("/")[3])
    // console.log("restaurantid", restaurantid)

    useEffect(() => {
        if (isNaN(restaurantid)) {
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
                    <h4>Nashville Hot History</h4>
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