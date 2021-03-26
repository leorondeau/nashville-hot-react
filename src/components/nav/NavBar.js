import React, { useEffect, useContext, useState } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { RestaurantContext } from '../restaurant/RestaurantProvider'

export const NavBar = (props) => {
    const restaurantid = parseInt(props.history.location.pathname.split("/")[3])


    return (
        <ul className="navbar">
            <li className="navbar__item">
                <button className="nav-link btn" onClick={() => {

                    props.history.push("/")
                }

                }>Home</button>
            </li>
            
            {
                (localStorage.getItem("nashvillehot_token") !== null) ?

                    <li className="nav-item">
                        <button className="nav-link fakeLink btn"
                            onClick={() => {
                                localStorage.removeItem("nashvillehot_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}