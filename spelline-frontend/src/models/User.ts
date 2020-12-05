export type User = {
    id: number,
    email: string,
    password: string,
    role: Roles;
};

export enum Roles {
    ADMIN = "Admin",
    EXPERT = "Expert",
    USER = "User"
}
