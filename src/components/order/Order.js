import React, { useContext, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { OrderContext } from './OrderProvider'
import { RestaurantHeatContext } from '../restaurantheat/RestaurantHeatProvider'
import { Link } from 'react-router-dom'
import pencil from "/Users/admin/workspace/nashvillehotindexreact/src/components/order/pencil.svg"
import trash from "/Users/admin/workspace/nashvillehotindexreact/src/components/order/trash.svg"
import "./Order.css"


/*
    Called in OrderAllList.js and OrderList.js
    Individual order card with ternaries that render props based on if a restaurant has been selected or not.
    On login the most recent 5 orders render when a restaurant is selected the orders for that restaurant render.
*/

export const Order = ({ order }) => {
    const { orders, deleteOrder, getOrdersByUserByRestaurantId } = useContext(OrderContext)
    const { restaurantHeat, getRestaurantHeatByRestaurantId } = useContext(RestaurantHeatContext)
    const params = useParams()
    const history = useHistory()

    const restaurantid = parseInt(params.restaurantId)

    useEffect(() => {
        if (isNaN(restaurantid)){
        } else {getOrdersByUserByRestaurantId(restaurantid)}

    },[restaurantHeat])

    return (
        <>
            <section className="order">
                <div className="order__detail" id={`order--${order.id}`}>

                    <div>
                        {
                            ("restaurantId" in params)
                                ? <div></div>
                                : <Link className="order__name" to={`/restaurant/${order.restaurant.id}`}>{order.restaurant.name}</Link>
                        }
                    </div>
                    <div className="order__heat">

                        <div >Ordered:</div>
                        <div className="order__heat-name">{order.restaurantheat.name}</div>
                    </div>
                    <div className="order__note">
                        <div >Note:</div>
                        <div className="order__note-name">{order.note}</div>
                    </div>
                    <div className="order__enjoyable">
                        {/*  */}
                        <div>Enjoyable:</div>
                        {
                            order.enjoyable
                                ? <div className="order__enjoyed">Yes</div>
                                : <div className="order__not-enjoy">No</div>
                        }
                    </div>
                    <div className="order__actions">
                        <div>
                            {
                                ("restaurantId" in params)
                                && <img src={pencil} className="btn btn-3"
                                    onClick={e => history.push(`/orders/${order.id}/edit`)}
                                ></img>
                            }
                        </div>
                        <div>
                            {
                                ("restaurantId" in params)
                                && <img src={trash} className="btn btn-3" 
                                    onClick={e => {
                                        if (window.confirm("Delete this order?")) {
                                            deleteOrder(order.id, restaurantid)

                                                .then(history.push(`/restaurant/${restaurantid}`))
                                                .then(getOrdersByUserByRestaurantId(restaurantid))
                                                .then(getRestaurantHeatByRestaurantId(restaurantid))
                                        }
                                    }}></img>
                                    
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </section>


        </>
    )

}

