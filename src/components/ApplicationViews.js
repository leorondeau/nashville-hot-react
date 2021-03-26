import React from "react"
import { Route } from "react-router-dom"
import { RestaurantProvider } from "./restaurant/RestaurantProvider.js"
import { RestaurantList } from './restaurant/RestaurantList'
import { RestaurantDetail } from './restaurant/RestaurantDetail'
import { RestaurantHeatProvider } from './restaurantheat/RestaurantHeatProvider'
import { RestaurantHeatList } from "./restaurantheat/RestaurantHeatList"
import { OrderProvider } from "./order/OrderProvider.js"
import { OrderList } from './order/OrderList'
import { OrderForm } from './order/OrderForm'
import { Profile } from './profile/Profile'
import { ProfileProvider } from "./profile/ProfileProvider"


export const ApplicationViews = (props) => {
    return <>
        {/* <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}> */}
        <ProfileProvider>
            <RestaurantProvider>
                <RestaurantHeatProvider>
                    <OrderProvider>
                        <Route exact path="/" render={(props) => {
                            return <Profile {...props} />
                        }}>
                        </Route>
                    </OrderProvider>
                </RestaurantHeatProvider>
            </RestaurantProvider>
        </ProfileProvider>
        <ProfileProvider>
            <RestaurantProvider>
                <RestaurantHeatProvider>
                    <OrderProvider>
                        <Route path="/restaurant/:restaurantId(\d+)" render={(props) => {
                            return <>
                                <div className="profile">
                                    <div className="profile__card">
                                        < OrderList {...props} />
                                    </div>
                                    <div className="restaurant-outer">

                                        <div className="profile__card restaurant__inner">
                                            < RestaurantList  {...props} />
                                            <RestaurantDetail {...props} />
                                            <OrderForm {...props} />
                                        </div>
                                    </div>
                                    <div className="profile__card">
                                        <RestaurantHeatList {...props} />
                                    </div>
                                </div>
                            </>
                        }}>
                        </Route>

                        <Route exact path="/orders/:orderId(\d+)/edit" render={(props) => {
                            return <>
                                <div className="order-wrapper">
                                    <OrderForm {...props} />
                                </div>
                            </>
                        }}>
                        </Route>

                    </OrderProvider>
                </RestaurantHeatProvider>
            </RestaurantProvider>
        </ProfileProvider>

        {/* </main> */}
    </>
}



{/* <RestaurantProvider>
<RestaurantHeatProvider>
    <OrderProvider>
        <Route path="/restaurant/:restaurantId(\d+)" render={(props) => {
            return <Profile {...props} />
        }}>
        </Route>
    </OrderProvider>
</RestaurantHeatProvider>
</RestaurantProvider>
<Route path="/" render={(props) => {
return <OrderList {...props} />
}}> */}