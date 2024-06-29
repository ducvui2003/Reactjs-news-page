import { User, UserLogin } from '../types/user.type';
import { userData } from '../data/userData';
import { v4 as uuidv4 } from 'uuid';

const getListUser = (): User[] => {
  return userData;
};

const add = (user: User) => {
  user.id = uuidv4();
  getListUser().push(user);
};

const get = (email: string): User | undefined =>
  getListUser().find((item: User) => email == item.email);

const remove = (id: string) => {
  const newDataUser = getListUser().find((item: User): User => item.id == id);
  if (newDataUser) userData.slice(newDataUser.id, 1);
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
    return userExist;
  return undefined;
};
export { add, get, remove, register, login };
