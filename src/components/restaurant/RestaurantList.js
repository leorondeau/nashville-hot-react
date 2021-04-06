import React, { useContext, useEffect, useState } from 'react'
import { RestaurantContext } from './RestaurantProvider'
import { useParams, useHistory, } from 'react-router-dom'




export const RestaurantList = (props) => {
    const { restaurants, getRestaurants } = useContext(RestaurantContext)
    const [currentRestaurant, setCurrentRestaurant] = useState(0)
    const params = useParams()
 
    useEffect(() => {
        getRestaurants()

    }, [])

    
    return (
        <>
            <section>
                <header className="restaurant">
                    {
                        ("restaurantId" in params && window.outerWidth <= 375)
                        ? null
                        :<h4>Nashville Hot Restaurants</h4>
                    }
                </header>
                
                <fieldset>
                    <div className="restaurants">
                        <label htmlFor="name"> </label>
                        <select type="dropdown" name="name" className="form-control"
                            value={currentRestaurant}
                            onChange={(e) => {
                                setCurrentRestaurant(parseInt(e.target.value))
                                props.history.push(`/restaurant/${e.target.value}`)
                                
                            }}
                        >
                            <option value="0" >Select a restaurant...</option>
                            {
                                restaurants.map(r => (
                                    <option key={r.id} value={r.id}>{r.name}</option>
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
