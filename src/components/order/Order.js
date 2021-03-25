import React, { useContext } from 'react'
import { useParams, useHistory, } from 'react-router-dom'
import { OrderContext } from './OrderProvider'
import { Link } from 'react-router-dom'
import "./Order.css"

export const Order = ({ order }) => {
    const { deleteOrder } = useContext(OrderContext)
    const params = useParams()
    const history = useHistory()

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
                    <div>Ordered:{order.restaurantheat.name}</div>
                    <div>Note: {order.note}</div>
                    <div>
                        {
                            order.enjoyable
                                ? <div className="order__enjoyed">
                                    Yes
                           </div>
                                : <div className="order__not-enjoy">
                                    No
                           </div>
                        }
                    </div>
                    <div>
                        {
                            ("restaurantId" in params)
                                ? <button className="btn btn-3"
                                    onClick={e => history.push(`/orders/${order.id}/edit`)}
                                >Edit</button>
                                : <div></div>
                        }
                    </div>
                    <div>
                        {
                            ("restaurantId" in params)
                                ? <button className="btn btn-3"
                                    onClick={e => {
                                        if (window.confirm("Delete this order?")) {
                                            deleteOrder(order.id)
                                                .then(() => history.push(`/`))
                                        }
                                    }}>Delete</button>
                                : <div></div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}