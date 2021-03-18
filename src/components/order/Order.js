import React from 'react'
import { Link } from 'react-router-dom'
import "./Order.css"

export const Order = ({ order }) => {

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

                </div>
            </section>
        </>
    )
}