import React from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./Order.css"

export const Order = ({ order }) => {

    const params = useParams()
    const history = useHistory()

    return (
        <>
            <section className="order">
                <div className="order__name" id={`order--${order.id}`}>
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
                    <button className="btn btn-3"
                        onClick={e => history.push(`/orders/${order.id}/edit`)}
                    >Edit</button>

                </div>
            </section>
        </>
    )
}