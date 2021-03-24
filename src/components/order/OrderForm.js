import React, { useContext, useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { RestaurantHeatContext } from '../restaurantheat/RestaurantHeatProvider'
import { OrderContext } from './OrderProvider'



export const OrderForm = (props) => {

    const { rateRestaurantHeat,restaurantHeatByRestaurant, getRestaurantHeatByRestaurantId } = useContext(RestaurantHeatContext)
    const { getOrder, createOrder, editOrder, getOrdersByUser } = useContext(OrderContext)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)
    const [currentRating, setCurrentRating] = useState(1)
    const [currentOrder, setCurrentOrder] = useState({

        restaurantid: 0,
        restaurantheatid: 0,
        note: "",
        enjoyable: false,
        rating: 1
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
                    restaurantid: order.restaurant.id,
                    restaurantheatid: order.restaurantheat.id,
                    note: order.note,
                    enjoyable: order.enjoyable,
                    rating: order.rating.rating
                })

            })
        }
    }, [params.orderId])
    
    console.log("props", props)
    const handleControlledInputChange = (event) => {
        const newOrderState = Object.assign({}, currentOrder)
        newOrderState[event.target.name] = event.target.value
        if (newOrderState.enjoyable === "true") {
            newOrderState.enjoyable = true
        } else if (newOrderState.enjoyable ==="false") {
            newOrderState.enjoyable = false
        }
        setCurrentOrder(newOrderState)
    }
    console.log(params)

    // const handleControlledInputRating = (event) => {
    //     const newRatingState = event.target.value
    //     setCurrentRating(newRatingState)
    // }
    
    
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
                                    defaultValue={rh.id}                                    
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
                    <label htmlFor="rating">Rate Heat {`${currentOrder.rating}`}</label>                        
                        <input type="range" name="rating" min="1" max="10" required autoFocus className="form-control"
                        value={currentOrder.rating}
                        onChange={handleControlledInputChange}
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
                    <div>Enjoyable:</div>
                    <label htmlFor="enjoyable">Yes </label>
                    <input
                        type="radio"
                        name="enjoyable"
                        checked={currentOrder.enjoyable === true}
                        value="true"
                        onChange={handleControlledInputChange}
                    />
                    <label htmlFor="enjoyable">No </label>
                    <input type="radio" name="enjoyable"
                        checked={currentOrder.enjoyable === false} value="false"
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
                                restaurantId: parseInt(currentOrder.restaurantid),
                                restaurantHeatId: currentOrder.restaurantheatid,
                                note: currentOrder.note,
                                enjoyable: currentOrder.enjoyable,
                                rating: parseInt(currentOrder.rating)
                            })
                            
                                .then(() => history.push(`/`))
                        }}
                        className="btn btn-primary">Save</button>
                    : <button type="submit"
                        onClick={evt => {
                            
                            evt.preventDefault()
                            
                            const order = {
                                restaurantId: parseInt(restaurantid),
                                restaurantHeatId: parseInt(currentOrder.restaurantheatid),
                                note: currentOrder.note,
                                enjoyable: currentOrder.enjoyable,
                                createdDate: todayDate,
                                rating: parseInt(currentOrder.rating)
                            }                                               
                            
                            createOrder(order)
                            .then(() => history.push(`/`))
                        }}
                        className="btn btn-primary">Create</button>
            }

        </form >
    )

    // History is an array that keeps track of all the urls and the browser is on the last
    // element in that array so .push is adding ("/") to the end of the array
}