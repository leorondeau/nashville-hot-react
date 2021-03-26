import React, { useContext, useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { OrderContext } from './OrderProvider'
import { Order } from './Order'
import Dropdown from 'react-bootstrap/Dropdown'
import { ProfileContext } from '../profile/ProfileProvider'


export const OrderAllList = (props) => {
    const { orders, setOrders, getOrdersByUser, getLimitedOrdersByUser, getOrdersByUserByRestaurantId } = useContext(OrderContext)
    const { profile, getProfile } = useContext(ProfileContext)
    const [buttonClicked, setButtonClicked] = useState(false)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)


    // useEffect(() => {
    //     getProfile()
    // }, [])

    // useEffect(() => {
    //     if (isNaN(restaurantid) || restaurantid == 0) {
    //         getLimitedOrdersByUser()
    //         // getOrdersByUser()
     
    //     }
    //     else {
    //         (getOrdersByUserByRestaurantId(restaurantid))
    //     }

    //     console.log("restId")
    // }, [restaurantid])

    useEffect(() => {
        
        if(buttonClicked == true) {
            getOrdersByUser()
        } else {
            getLimitedOrdersByUser()
        }
        console.log("button")
        },[buttonClicked])
  
   

    return (
        <>


            <section>
                <header className="restaurants__header restaurant">
                    <h4>Nashville Hot Visits</h4>
                </header>
                <div className="restaurant__customer">
                    <h5>{profile.customer.user.first_name}</h5>
                    <h5>{profile.customer.heat_tolerance}</h5>
                </div>

                {
                    orders.map(o => (
                        <Order key={o.id} value={o.id} order={o} />
                    ))
                }
                
                <button onClick={e => {
                    buttonClicked ? setButtonClicked(false) :setButtonClicked(true)}
                }> 
                All Orders
                </button>
            </section>

        </>
    )
}