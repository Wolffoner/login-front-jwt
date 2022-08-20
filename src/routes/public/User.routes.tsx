import { Box, CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes, PublicRoutes } from "../enums";

const LoginView = lazy(() => import("@/screens/login/Login.screen"));
const UserInformation = lazy(() => import("@/screens/user-information/UserInformation.screen"));

export const UserPublicRoutes = () => {
    return (
        <Suspense
            fallback={
                <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column', width: '100vw', justifyContent: 'center', alignItems: 'center' }} >
                    <CircularProgress />
                </Box>
            }>
            <Routes>
                <Route index element={<LoginView />} />
                <Route path={PublicRoutes.LOGIN} element={<LoginView />} />
                <Route path={PrivateRoutes.USER_INFO} element={<UserInformation />} />
            </Routes>
        </Suspense>
    );
}