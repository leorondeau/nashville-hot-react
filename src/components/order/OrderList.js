import React, { useContext, useEffect, useState } from 'react'
import {useSpring, animated} from 'react-spring'
import { useParams, useHistory } from 'react-router-dom'
import { OrderContext } from './OrderProvider'
import { Order } from './Order'
import Dropdown from 'react-bootstrap/Dropdown'
import { ProfileContext } from '../profile/ProfileProvider'


export const OrderList = (props) => {
    const { orders, setOrders, getOrdersByUser, getLimitedOrdersByUser, getOrdersByUserByRestaurantId } = useContext(OrderContext)
    const { profile, getProfile } = useContext(ProfileContext)
 
    const [value, setValue] = useState(true)
    const params = useParams()
    const history = useHistory()
    const restaurantid = parseInt(params.restaurantId)

    useEffect(() => {
        getProfile()
    }, [])

    useEffect(() => {
        if (isNaN(restaurantid) || restaurantid == 0) {
            getLimitedOrdersByUser()
            // getOrdersByUser()

        }
        else {
            (getOrdersByUserByRestaurantId(restaurantid))
        }

        
    }, [restaurantid])

    const SpringIn = ({ children }) => {
        // const AnimatedOrderList = styled(animated.orderlist-hide)
        const props = useSpring({
          opacity: 1,
          from: { opacity: 0 },
          config: { mass: 10, tension: 10, friction: 10 }
        });
        return <animated.div style={props}>{children}</animated.div>;
      };
    console.log(props)


    return (
        <>


            <section>
                <header className="restaurants__header restaurant">
                    <h4>Nashville Hot Visits</h4>
                </header>
                <button className="mobile__button" onClick={() => {
                    setValue(!value)}}>

                Nashville Hot Visits
                </button>
               <SpringIn> <div className={value ? "orderlist-hide" : null}>

                    <div className="restaurant__customer">
                        <h5>{profile.customer.user.first_name}</h5>
                        <h5>{profile.customer.heat_tolerance}</h5>
                    </div>

                    {
                        orders.map(o => (
                            <Order key={o.id} value={o.id} order={o} />
                        ))
                    }

                </div></SpringIn>
                
            </section>

        </>
    )
}