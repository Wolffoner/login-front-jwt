import { ClientUser, clientUserEmpty } from "./User.types";

export interface LoggedUser {
    user: ClientUser;
    token: string;
}

export const loggedUserEmpty: LoggedUser = {
    user: clientUserEmpty,
    token: ''
}