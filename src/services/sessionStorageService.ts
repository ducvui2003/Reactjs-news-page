// Thêm user
import { User } from "../types/user.type";

export enum SessionStorage {
  USER = "user",
}

const setUser = (user: User) => {
  sessionStorage.setItem(SessionStorage.USER, JSON.stringify(user));
};

const getUser = (): User | null => {
  const jsonUser = sessionStorage.getItem(SessionStorage.USER);
  if (jsonUser == null) return null;
  try {
    const user: User = JSON.parse(jsonUser);
    return user;
  } catch (error) {
    return null;
  }
};
const addUser = (user: User): void => {
  sessionStorage.setItem(SessionStorage.USER, JSON.stringify(user));
};

const removeUser = (): void => {
  sessionStorage.removeItem(SessionStorage.USER);
};

export { addUser, getUser, removeUser };
