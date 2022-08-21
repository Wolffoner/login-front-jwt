import LoginContext from "@/context/Login.context";
import { PublicRoutes } from "@/routes/enums/UserRoutes.enum";
import userService from "@/services/user.service";
import { Avatar, Box, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserData from "./components/UserData.component";

const styles = {
    container: {
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url('/background-image.jpg')`,
        backgroundSize: 'cover'
    },
    dataContainer: {
        borderRadius: '2%',
        backgroundColor: 'white',
        height: '50%',
        width: {
            xs: '95%',
            sm: '60%',
            md: '35%'
        },
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10%'
    }
};

const UserInformation = () => {

    const navigate = useNavigate();
    const { loggedUser, handleLogin } = useContext(LoginContext);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        try {
            const { data } = await userService.getUser();
            handleLogin({ ...loggedUser, user: data });
        } catch (error) {
            navigate(PublicRoutes.LOGIN);
            console.log(error);
        }
    };

    return (
        <Box sx={styles.container}>
            <Box sx={styles.dataContainer}>
                <UserData user={loggedUser?.user} />
            </Box>
        </Box >
    )
};

export default UserInformation;