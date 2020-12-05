export type User = {
    id: number,
    email: string,
    password: string,
    role: Roles;
};

export enum Roles {
    ADMIN = "ADMIN",
    EXPERT = "EXPERT",
    USER = "USER"
}

export const defaultUser : User = {
    id:0,
    email:'',
    password:'',
    role:Roles.USER
};
