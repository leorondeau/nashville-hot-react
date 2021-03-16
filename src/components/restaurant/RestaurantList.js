import React, {  useContext, useEffect, useState } from 'react'
import { RestaurantContext } from './RestaurantProvider'

import Dropdown from 'react-bootstrap/Dropdown'



export const RestaurantList = (props) => {
    const { restaurants, getRestaurants } = useContext(RestaurantContext)
    const [currentRestaurant, setCurrentRestaurant] = useState("")

    
    // console.log("restaurantid", restaurantid)
    useEffect(() => {
        getRestaurants()

    }, [])


    return (
        <>

            <header className="restaurants__header">
                <h1>Nashville Hot Chicken Restaurant</h1>
            </header>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name"> </label>
                    <select type="dropdown" name="name" className="form-control"
                        value={currentRestaurant}
                        onChange={(e) => {   
                            setCurrentRestaurant(e.target.value)
                            props.history.push(`/restaurant/${e.target.value}`) 
                            

                        }}
                    
                        >
                        <option value="0">Select a restaurant...</option>
                        {
                            restaurants.map(r => (
                                
                                <option  key={r.id} value={`${r.name}/${r.id}`}>{r.name}</option>
                            ))
                        }
                    </select>
                </div>
            </fieldset>
        </>
    )
}

{/* <Dropdown onSelect={selectedRestaurant} >
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Choose a Restaurant
                </Dropdown.Toggle>

                <Dropdown.Menu >
                    {
                        restaurants.map(r => <Dropdown.Item  >
                            <Restaurant key={r.id} value={r.id} restaurant={r} />
                        </Dropdown.Item>)
                    }
                </Dropdown.Menu>
            </Dropdown> */}
