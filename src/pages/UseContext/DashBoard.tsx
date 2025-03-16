import { Profile,SideBar } from "./Components"


interface DashBoardProps {
}

export default function DashBoard({}:DashBoardProps){
    return (
        <div>
         <Profile/>
         <SideBar />
        </div>
    )
}