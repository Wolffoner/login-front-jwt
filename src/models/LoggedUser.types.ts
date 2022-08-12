import { ClientUser, clientUserEmpty } from "./User.types";

export interface LoggedUser {
    user: ClientUser;
    token: string;
}

export const LoggedUserEmpty: LoggedUser = {
    user: clientUserEmpty,
    token: ''
}