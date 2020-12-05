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
    NORMAL = "Normal",
    PRO = "Pro",
    EXPRESSPRO = "Express Pro"
}

export enum RequestStatus {
    OPEN = "Open",
    INPROGRESS= "In Progress",
    DONE = "Done"
}
