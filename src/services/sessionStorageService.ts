// Thêm user
import {User} from "../types/user.type";

export enum SessionStorage {
    USER = "user",
}

const getUser = (): User | null => {
    const jsonUser = sessionStorage.getItem(SessionStorage.USER);
    if (jsonUser == null) return null;
    const obj = JSON.parse(jsonUser);
    try {
        return {
            email: obj.username,
            password: obj.password,
        }
    } catch (error) {
        return null;
    }

}
const addUser = (user: User): void => {
    const jsonUser = JSON.stringify(user);
    sessionStorage.setItem(SessionStorage.USER, jsonUser);
}

const removeUser = (): void => {
    sessionStorage.removeItem(SessionStorage.USER);
}


export {addUser, getUser, removeUser}