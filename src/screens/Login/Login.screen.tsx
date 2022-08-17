import { ServerUser, serverUserEmpty } from "@/models";
import { Box } from "@mui/material";
import { useState } from "react";
import { EmailInput, PasswordInput } from "./components";

const styles = {
    container: {
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundImage: `url('/background-image.jpg')`,
        backgroundSize: 'cover'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        left: 0, top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: { xs: '100%', sm: '80%', md: '60%', lg: '40%', xl: "20%" },
        height: '100%',
        gap: '1rem'
    }
}

export const LoginView = () => {

    const [user, setUser] = useState<ServerUser>(serverUserEmpty);

    return (
        <Box sx={styles.container}>
            <Box sx={styles.formContainer}>
                <EmailInput />
                <PasswordInput />
                <button>{"sign in"}</button>
            </Box>
        </Box >
    )
}