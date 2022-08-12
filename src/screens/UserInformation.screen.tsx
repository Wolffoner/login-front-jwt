import LoginContext from "@/context/Login.context";
import { useContext } from "react"


export const UserInformation = () => {

    const { user } = useContext(LoginContext);

    return (
        <div>
            <h1>User Information</h1>
            <h2>Hello {user.email}!</h2>
        </div>
    )
}