import { User, UserLogin } from '../types/user.type';
import { v4 as uuidv4 } from 'uuid';
import { getListUser, setListUser } from './sessionStorageService';

const userData: User[] = getListUser();

const add = (user: User) => {
  user.id = uuidv4();
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

const register = (user: User): boolean => {
  const userExist = get(user.email);
  if (userExist) return false;
  add(user);
  return true;
};

const login = (user: UserLogin): User | undefined => {
  const userExist = get(user.email);
  if (userExist != undefined && userExist.password == user.password)
   {
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
