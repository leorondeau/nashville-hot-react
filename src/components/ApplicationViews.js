import React from "react"
import { Route } from "react-router-dom"
import { RestaurantProvider } from "./restaurant/RestaurantProvider.js"
import { RestaurantList } from './restaurant/RestaurantList'
import { RestaurantDetail } from './restaurant/RestaurantDetail'
import { RestaurantHeatProvider } from './restaurantheat/RestaurantHeatProvider'
import { RestaurantHeatList } from "./restaurantheat/RestaurantHeatList.js"
import { OrderProvider } from "./order/OrderProvider.js"
import { OrderList } from './order/OrderList'
import { Profile } from './profile/Profile'

export const ApplicationViews = (props) => {
    return <>
        {/* <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}> */}
            <RestaurantProvider>
                <RestaurantHeatProvider>
                    <OrderProvider>
                        <Route path={["/", "/restaurant"]} render={(props) => {
                            return <Profile {...props} />
                        }}>
                        </Route>
                    </OrderProvider>
                </RestaurantHeatProvider>
            </RestaurantProvider>
            {/* <Route path="/" render={(props) => {
                    return <OrderList {...props} />
                }}>
                </Route> */}
        {/* </main> */}
    </>
}