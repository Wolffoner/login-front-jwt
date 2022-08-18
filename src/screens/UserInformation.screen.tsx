import LoginContext from "@/context/Login.context";
import { Box } from "@mui/material";
import { useContext } from "react";

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

export const UserInformation = () => {

    const { loggedUser } = useContext(LoginContext);

    return (
        <Box sx={styles.container}>
            <Box sx={styles.dataContainer}>
                <h1>Hello {loggedUser.user.email}!</h1>
            </Box>
        </Box >
    )
}