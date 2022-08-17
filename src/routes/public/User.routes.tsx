import { LoginView } from "@/screens";
import { Route, Routes } from "react-router-dom";

export const UserPublicRoutes = () => {
    return (
        <Routes>
            <Route index element={<LoginView />} />
            <Route path="/login" element={<LoginView />} />
        </Routes>
    );
}