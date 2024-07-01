// Thêm user
import { User } from '../types/user.type';
import { userData } from '../data/userData';

export enum SessionStorage {
  LIST_USER = 'list_user',
  LIST_COMMENT = 'list_comment',
}

const getUser = (): User | null => {
  const listUser: User[] = getListUser();

  const user: User | undefined = listUser.find(
    (user) => user.email == user.email,
  );
  if (user == undefined) return null;
  return user;
};
const addUser = (user: User): void => {
  const listUser: User[] = getListUser();
  listUser.push(user);
  setListUser(listUser);
};

const removeUser = (email: string): void => {
  const listUser: User[] = getListUser();
  const index = listUser.findIndex((user) => user.email == email);
  index != -1 && listUser.splice(index, 1);
  setListUser(listUser);
};
// List user
const setListUser = (listUser: User[]) => {
  sessionStorage.setItem(SessionStorage.LIST_USER, JSON.stringify(listUser));
};

const getListUser = (): User[] => {
  const jsonUser = sessionStorage.getItem(SessionStorage.LIST_USER);
  if (jsonUser == null) {
    setListUser(userData);
    return userData;
  }
  try {
    const listUser: User[] = JSON.parse(jsonUser);
    return listUser;
  } catch (error) {
    return [];
  }
};

export { addUser, getUser, removeUser, getListUser, setListUser };
