import React, { useContext } from 'react'
import { useParams, useHistory, } from 'react-router-dom'
import { OrderContext } from './OrderProvider'
import { RestaurantHeatContext } from '../restaurantheat/RestaurantHeatProvider'
import { Link } from 'react-router-dom'
import "./Order.css"

export const Order = ({ order }) => {
    const { deleteOrder, getOrdersByUserByRestaurantId } = useContext(OrderContext)
    const {  getRestaurantHeatByRestaurantId  } = useContext(RestaurantHeatContext)
    const params = useParams()
    const history = useHistory()

    const restaurantid = parseInt(params.restaurantId)
    
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
                        <div>{order.restaurantheat.name}</div>
                    </div>
                    <div className="order__note">
                        <div >Note:</div>
                        <div>{order.note}</div>
                    </div>
                    <div>
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
                                && <button className="btn btn-3"
                                    onClick={e => history.push(`/orders/${order.id}/edit`)}
                                >Edit</button>
                            }
                        </div>
                        <div>
                            {
                                ("restaurantId" in params)
                                && <button className="btn btn-3"
                                    onClick={e => {
                                        if (window.confirm("Delete this order?")) {
                                            deleteOrder(order.id)
                                            .then(getOrdersByUserByRestaurantId(restaurantid))
                                            .then(getRestaurantHeatByRestaurantId(restaurantid))
                                                // .then(() => history.push(`/restaurant/${restaurantid}`))
                                        }
                                    }}>Delete</button>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}