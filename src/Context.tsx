import React, { useState, useContext, ReactNode, useReducer, useEffect, Dispatch, SetStateAction } from "react";
import reducer from "./reducers";
import { UserData } from "./models";
import axios from "axios";
import userDetails from "./userDetails";

interface AuthProviderChildren {
    children: ReactNode
}

interface AppContext {
    users?: UserData[],
    specificUser: UserData | undefined,
    setUsers: Dispatch<SetStateAction<UserData[]>>,
    setSpecificUser: Dispatch<SetStateAction<UserData>> | undefined,
    fetchUsers: () => Promise<void>,
    getSpecificUser: (id:number) => Promise<void>
}
const AppContext = React.createContext<AppContext>({
    users: [],
    specificUser: undefined,
    setUsers:async () => {},
    setSpecificUser: async() => {},
    fetchUsers: async () => {},
    getSpecificUser: async () => {}
})

const API_URL:string = "http://localhost:3000/users"




export const AppProvider = ({children}: AuthProviderChildren) => {







    const [users, setUsers] = useState<UserData[]>([])
    const [specificUser, setSpecificUser] = useState<UserData | undefined>(undefined)

    const fetchUsers = async () => {
          try {
         const response = await axios.get<UserData[]>(API_URL)
          console.log(response.data)
          setUsers(response.data)
          console.log(users)
          } catch (error) {
              console.log(error)
          }
          
      }
      useEffect(() => {
        fetchUsers()
      },[])
      
    const getSpecificUser = async (id: number | undefined | string) => {
             try{
                 const response = await axios.get<UserData>(`${API_URL}/${id}`)
                  console.log(response.data)
                  setSpecificUser(response.data)
                  console.log(specificUser)               
             } catch(error){
                console.log(error)
             }
    }

    
    const contextValue: AppContext = {
        users,
        specificUser,
        setUsers,
        setSpecificUser: setSpecificUser as Dispatch<SetStateAction<UserData>>,
        fetchUsers,
        getSpecificUser
   }
   

    return <AppContext.Provider value={contextValue}>
         {children}
     </AppContext.Provider>
}


export const useGlobalContext = () => {
    return useContext(AppContext)
}