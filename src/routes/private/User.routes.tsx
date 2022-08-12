import { UserInformation } from "@/screens/UserInformation.screen";
import { Route, Routes } from "react-router-dom";

export const UserPrivateRoutes = () => {
    return (
        <Routes>
            <Route path="/home" element={<UserInformation />} />
        </Routes>
    );
}