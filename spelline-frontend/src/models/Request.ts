import {defaultUser, User} from './User';

export type Request = {
    id: number,
    file?: File,
    wordcount: number,
    price: number,
    level: RequestLevel,
    status: RequestStatus,
    user?: User,
    expert?: User;
};

export enum RequestLevel {
    NORMAL = "NORMAL",
    PRO = "PRO",
    EXPRESSPRO = "EXPRESSPRO"
}

export enum RequestStatus {
    OPEN = "OPEN",
    INPROGRESS= "INPROGRESS",
    DONE = "DONE"
}

export const defaultRequest: Request = {
    id: 0,
    wordcount: 0,
    price: 0,
    level: RequestLevel.NORMAL,
    status: RequestStatus.OPEN
};
