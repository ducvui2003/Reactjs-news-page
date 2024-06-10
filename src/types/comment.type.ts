import {User} from "./user.type";

interface Comment {
    user: User
    content: string,
    createAt: Date
}