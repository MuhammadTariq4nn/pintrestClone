import { useState } from "react"
import UserContext from "./UserContext"

const UserContextProvider=({children})=>{
    const [searchedData,setSearchedData]=useState(null);
   return(
    <>
        <UserContext.Provider value={{searchedData,setSearchedData}}>
            {children}
        </UserContext.Provider>
    </>
   )
}

export default UserContextProvider