import { LoggedUserEmpty } from "@/models/LoggedUser.types";
import { createContext } from "react";

const LoginContext = createContext(LoggedUserEmpty);

export default LoginContext;