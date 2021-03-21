import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { RestaurantProvider } from "./restaurant/RestaurantProvider"

export const NashvilleHotIndex = () => (
    <>
        <RestaurantProvider>

            <Route render={() => {
                if (localStorage.getItem("nashvillehot_token")) {
                    return <>
                        <Route render={props => <NavBar {...props}/>} />
                        <Route render={props => <ApplicationViews {...props} />} />
                    </>
                } else {
                    return <Redirect to="/login" />
                }
            }} />
        </RestaurantProvider>

        <Route path="/login" render={Login} />
        <Route path="/register" render={Register} />
    </>
)