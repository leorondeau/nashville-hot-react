import React from "react"
import { Route } from "react-router-dom"
import { RestaurantProvider } from "./restaurant/RestaurantProvider.js"
import {RestaurantList} from './restaurant/RestaurantList'
import { RestaurantDetail } from './restaurant/RestaurantDetail'

export const ApplicationViews = (props) => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            backgroundColor: "lightgoldenrodyellow"
        }}>
            <RestaurantProvider>
                <Route path="/" render={(props) => {
                   return <RestaurantList {...props}/> 
                }}>
                </Route>
                <Route path="/restaurant/" render={(props) => {
                   return <RestaurantDetail {...props}/> 
                }}>
                </Route>
            </RestaurantProvider>
        </main>
    </>
}