import { createContext, useContext } from "react";

import { User } from "../UseContext";

//this should hold only User, but initially we dont have any user so we set undefined and user is presebt in local component(here in dashboard)
export const DashBoardContext = createContext<User | undefined>(undefined)

//create custom hook in which user can avl to all comp

export function useUserContext(){
    const user = useContext(DashBoardContext)

    if (user === undefined) {
        throw new Error("useUserContext must be used with a DashBoardContext")
        
    }

    return user;
}