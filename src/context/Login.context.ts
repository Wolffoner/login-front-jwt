import { LoggedUser, loggedUserEmpty } from "@/models";
import { createContext } from "react";

const LoginContext = createContext({ loggedUser: loggedUserEmpty, handleLogin: (user: LoggedUser) => { } });

export default LoginContext;