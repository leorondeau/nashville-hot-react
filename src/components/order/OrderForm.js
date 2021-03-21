import React, { useContext, useState, useEffect } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import { RestaurantHeatContext } from '../restaurantheat/RestaurantHeatProvider'
import { OrderContext } from './OrderProvider'


export const OrderForm = (props) => {

    const { restaurantHeatByRestaurant, getRestaurantHeatByRestaurantId } = useContext(RestaurantHeatContext)
    const { getOrder, createOrder, editOrder } = useContext(OrderContext)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)
    const [currentRestaurantHeat, setCurrentRestaurantHeat] = useState(0)
    const [enjoyableState, setEnjoyableState] = useState("true")
    const [currentRating, setCurrentRating] = useState({rating: 0})
    const [currentOrder, setCurrentOrder] = useState({

        restaurantid: restaurantid,
        restaurantheatid: parseInt(currentRestaurantHeat),
        note: "",
        enjoyable: enjoyableState
    })

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

    const handleControlledInputChange = (event) => {
        const newOrderState = Object.assign({}, currentOrder)
        newOrderState[event.target.name] = event.target.value
        setCurrentOrder(newOrderState)

        const newRestaurantHeatState = event.target.value
        setCurrentRestaurantHeat(parseInt(newRestaurantHeatState))

        const newEnjoyableState = event.target.value
        setEnjoyableState(newEnjoyableState)
    }

    const handleControlledInputRating = (event) => {
        const newRatingState = event.target.value
        setCurrentRating(newRatingState)
    }

    return (
        <form className="orderForm">
            <h5 className="orderForm__title">What'd ya get?</h5>
            <fieldset>
                <label htmlFor="restaurantheatid"></label>
                <select type="dropdown" name="restaurantheatid" value={currentRestaurantHeat.id}
                    onChange={handleControlledInputChange} >
                    <option value="0">Heat level</option>
                    {
                        restaurantHeatByRestaurant.map(rh => (
                            <option key={rh.id} value={rh.id}>{rh.name}</option>))
                    }
                </select>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating">Rate Heat 1-10</label>
                    <input type="range" name="rating" min="1" max="10" required autoFocus className="form-control"
                        defaultValue={currentRating.rating}
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
                    <input type="radio" name="enjoyable" 
                        checked={enjoyableState === "true"}
                        value="true"
                        onChange={handleControlledInputChange}
                    />
                    <label htmlFor="enjoyable">No </label>
                    <input type="radio" name="enjoyable"  
                        checked={enjoyableState === "false"} value="false"
                        onChange={handleControlledInputChange}
                    />
                </div>
            </fieldset>
            {
                ("orderId" in props.match.params)
                    ? <button
                        onClick={evt => {
                            // Prevent form from being submitted
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
                            // Prevent form from being submitted
                            evt.preventDefault()

                            const order = {

                                restaurantId: restaurantid,
                                restaurantHeatId: currentOrder.parseInt(currentRestaurantHeat),
                                note: currentOrder.note,
                                enjoyable: currentOrder.enjoyable
                            }
                            console.log(order)
                            // Send POST request to your API
                            createOrder(order)
                                // History is an array that keeps track of all the urls and the browser is on the last
                                // element in that array so .push is adding ("/") to the end of the array
                                .then(() => props.history.push("/"))
                        }}
                        className="btn btn-primary">Create</button>
            }

        </form>
    )
}