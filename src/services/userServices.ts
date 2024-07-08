import { User, UserLogin, UserRegister } from '../types/user.type';
import { v4 as uuidv4 } from 'uuid';
import { getListUser, setListUser } from './storage/sessionStorageService';

const userData: User[] = getListUser();

const add = (userRegister: UserRegister) => {
  const id = uuidv4();
  const user: User = {
    id,
    ...userRegister,
  };
  userData.push(user);
  setListUser(userData);
};

const get = (email: string): User | undefined =>
  userData.find((item: User) => email == item.email);

const remove = (id: string) => {
  const index = userData.findIndex((item: User) => item.id == id);
  if (index != -1) userData.slice(index, 1);
  setListUser(userData);
};

const register = (user: UserRegister): boolean => {
  const userExist = get(user.email);
  if (userExist) return false;
  add(user);
  return true;
};

const login = (user: UserLogin): User | undefined => {
  const userExist = get(user.email);
  if (userExist != undefined && userExist.password == user.password) {
    return userExist;
  }
  return undefined;
};

const updateInfo = (userInfo: User) => {
  const index = userData.findIndex(
    (item: User) => item.email == userInfo.email,
  );
  if (index != -1) userData[index] = userInfo;
  setListUser(userData);
};
export { add, get, remove, register, login, updateInfo };
