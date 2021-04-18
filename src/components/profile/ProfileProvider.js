import React, { useState } from "react"

export const ProfileContext = React.createContext()

/* 
   HTTP requests to server that query User-Customer table 
*/

export const ProfileProvider = (props) => {
  
    const [profile, setProfile] = useState({ customer:{user:{}}, heat_tolerance: {}})

    const getProfile = () => {
        return fetch("http://localhost:8000/profile", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("nashvillehot_token")}`
            }
        })
            .then(response => response.json())
            .then(setProfile)
    }

    return (
        <ProfileContext.Provider value={{ profile, getProfile }}>
            {props.children}
        </ProfileContext.Provider>
    )
}