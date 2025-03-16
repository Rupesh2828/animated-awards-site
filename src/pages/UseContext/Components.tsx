import { useContext } from "react";
import { useUserContext } from "./context";

interface SidebarProps{
}


export function SideBar({}:SidebarProps){

    // const user = useContext(DashBoardContext)
    const user = useUserContext()

    return (
        <div>
            <div>{user.name}</div>
            <div>Subscription Status: {user.isSubscribed}</div>
        </div>
    )
}

interface ProfileProps{
}

export function Profile({}:ProfileProps){
    const user = useUserContext()


    return <div>{user.name}</div>
}