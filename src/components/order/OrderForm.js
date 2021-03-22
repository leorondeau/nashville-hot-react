import React, { useContext, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantHeatContext } from '../restaurantheat/RestaurantHeatProvider'
import { OrderContext } from './OrderProvider'



export const OrderForm = (props) => {

    const { rateRestaurantHeat,restaurantHeatByRestaurant, getRestaurantHeatByRestaurantId } = useContext(RestaurantHeatContext)
    const { getOrder, createOrder, editOrder, getOrdersByUser } = useContext(OrderContext)
    const params = useParams()
    const history = useHistory()
    let isEnjoyable = ""
    const restaurantid = parseInt(params.restaurantId)
    const [currentRating, setCurrentRating] = useState(1)
    const [currentOrder, setCurrentOrder] = useState({

        restaurantid: restaurantid,
        restaurantheatid: 0,
        note: "",
        enjoyable: false
    })
    const todayDate = new Date().toISOString().slice(0,10);

    useEffect(() => {
        if (isNaN(restaurantid)) {
        } else { getRestaurantHeatByRestaurantId(restaurantid) }
    }, [])

    useEffect(() => {

        if ("orderId" in props.match.params) {
            getOrder(params.orderId).then(order => {

                setCurrentOrder({
                    restaurantid: order.restaurantid,
                    restaurantheatid: order.restaurantHeatId,
                    note: order.note,
                    enjoyable: order.enjoyable
                })

            })
        }
    }, [params.orderId])

    if (currentOrder.enjoyable === "true") {
        isEnjoyable = true
    } else if (currentOrder.enjoyable ==="false") {
        isEnjoyable = false
    }
    

    const handleControlledInputChange = (event) => {
        const newOrderState = Object.assign({}, currentOrder)
        newOrderState[event.target.name] = event.target.value
        setCurrentOrder(newOrderState)
    }

    const handleControlledInputRating = (event) => {
        const newRatingState = event.target.value
        setCurrentRating(newRatingState)
    }
    
    
    return (
        <form className="orderForm">
            <h5 className="orderForm__title">What'd ya get?</h5>
            <fieldset>
                {
                    restaurantHeatByRestaurant.map(rh => {
                        
                        return (
                            // <ul style={{list-style-type:none}}>

                            <li key={rh.id} >
                                <input
                                    type="radio"
                                    name="restaurantheatid"
                                    checked={currentOrder.restaurantheatid == rh.id ? true : false}
                                    value={rh.id}
                                    
                                    key={rh.id}
                                    onChange={handleControlledInputChange} />

                                <label htmlFor="restaurantheatid">{rh.name}</label>
                            </li>
                            // </ul>
                        )
                    })
                }
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating">Rate Heat {`${currentRating}`}</label>
                    <input type="range" name="rating" min="1" max="10" required autoFocus className="form-control"
                        defaultValue={currentRating}
                        onChange={handleControlledInputRating}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="note">Note: </label>
                    <input type="text" name="note" required autoFocus className="form-control"
                        value={currentOrder.note}
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label htmlFor="enjoyable">Yes </label>
                    <input
                        type="radio"
                        name="enjoyable"
                        checked={currentOrder.enjoyable === "true"}
                        value="true"
                        onChange={handleControlledInputChange}
                    />
                    <label htmlFor="enjoyable">No </label>
                    <input type="radio" name="enjoyable"
                        checked={currentOrder.enjoyable === "false"} value="false"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            {
                ("orderId" in props.match.params)
                    ? <button
                        onClick={evt => {
                            
                            evt.preventDefault()

                            editOrder({
                                id: params.orderId,
                                restaurantId: restaurantid,
                                restaurantHeatid: currentOrder.restaurantheatid,
                                note: currentOrder.note,
                                enjoyable: currentOrder.enjoyable
                            })

                                .then(() => props.history.push("/"))
                        }}
                        className="btn btn-primary">Edit</button>
                    : <button type="submit"
                        onClick={evt => {
                            
                            evt.preventDefault()
                            
                            const order = {

                                restaurantId: restaurantid,
                                restaurantHeatId: parseInt(currentOrder.restaurantheatid),
                                note: currentOrder.note,
                                enjoyable: isEnjoyable,
                                createdDate: todayDate
                            }

                            const rating = {
                                rating: currentRating
                            }                            
                            createOrder(order)
                            .then(rateRestaurantHeat(order.restaurantHeatId, rating))
                            .then(() => history.push("/"))
                        }}
                        className="btn btn-primary">Create</button>
            }

        </form >
    )

    // History is an array that keeps track of all the urls and the browser is on the last
    // element in that array so .push is adding ("/") to the end of the array
}