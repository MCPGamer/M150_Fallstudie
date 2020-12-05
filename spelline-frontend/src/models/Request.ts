import {User} from './User';

export type Request = {
    id: number,
    file: [],
    wordcount: number,
    price: number,
    level: RequestLevel,
    status: RequestStatus,
    user: User,
    expert: User;
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
