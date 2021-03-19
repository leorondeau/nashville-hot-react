import React, { useContext, useEffect, useState } from 'react'
import { RestaurantContext } from './RestaurantProvider'

import Dropdown from 'react-bootstrap/Dropdown'



export const RestaurantList = (props) => {
    const { restaurants, getRestaurants } = useContext(RestaurantContext)
    const [currentRestaurant, setCurrentRestaurant] = useState("")

    // const restaurantid = parseInt(props.history.location.pathname.split("/")[3])
    // console.log("restaurantid", restaurantid)

    useEffect(() => {
        getRestaurants()

    }, [])


    return (
        <>
            <section>


                <header className="restaurants__header restaurant">
                    <h4>Nashville Hot Restaurant</h4>
                </header>
                <fieldset>
                    <div className="restaurants">
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
                                    <option key={r.id} value={`${r.name}/${r.id}`}>{r.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </fieldset>
            </section>
        </>
    )
}

// {
//     (e.target.value === 0)
//     ? props.history.push(`/`)
//     : setCurrentRestaurant(e.target.value).then(
//     props.history.push(`/restaurant/${e.target.value}`)) 
//     }  



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
