import { ServerUser, serverUserEmpty } from "@/models";
import { Container } from "@mui/material";
import { url } from "inspector";
import { useState } from "react";
import { EmailInput, PasswordInput } from "./components";

export const LoginView = () => {

    const [user, setUser] = useState<ServerUser>(serverUserEmpty);

    return (
        <Container sx={{ display: 'flex', minWidth: '100%', minHeight: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '1rem', backgroundImage: `url('/background-image.jpg')`, backgroundSize: 'cover' }}>
            <EmailInput />
            <PasswordInput />
            <button>{"sign in"}</button>
        </Container>
    )
}