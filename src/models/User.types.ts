export interface ClientUser {
    email: string;
    id?: string;
    avatar?: string;
    age?: number;
    name?: string;
    role?: 'admin' | 'user'
    surname?: string;
}

export interface ServerUser extends ClientUser {
    password: string;
}

export const serverUserEmpty: ServerUser = {
    email: '',
    password: ''
}

export const clientUserEmpty: ClientUser = {
    email: '',
    id: "0",
    avatar: '',
    age: 0,
    name: '',
    role: 'user',
    surname: ''
}

