import React, {useContext, useEffect} from 'react'
import { RestaurantContext } from './RestaurantProvider'
import { Link } from "react-router-dom"

export const RestaurantDetail = (props) => {
    const { restaurant, getRestaurantById } = useContext(RestaurantContext)
    // const [restaurant, setRestaurant ] = useState({heatlevels: {}})

    const restaurantid = parseInt(props.history.location.pathname.split("/")[3])
    
    useEffect(() => {
      getRestaurantById(restaurantid)


    }, [restaurantid])
    
    return (
        <section className="restaurant">
            {/* <h3 className="restaurant__name">{restaurant.name}</h3> */}
            <img src={`${restaurant.img}`} className="restaurant__img"></img>
            <a href={restaurant.website} className="restaurant__website">{restaurant.website}</a>
        </section>
    )
}