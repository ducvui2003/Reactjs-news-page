// Thêm user
import { User } from '../types/user.type';
import { userData } from '../data/userData';

export enum SessionStorage {
  USER_CURRENT = 'user',
  LIST_USER = 'list_user',
  LIST_COMMENT = 'list_comment',
}

const getUser = (): User | null => {
  const listUser: User[] = getListUser();
  const user = getUserCurrent();
  if (user == null) return null;

  const userExist: User | undefined = listUser.find(
    (item) => item.email == user.email,
  );
  if (userExist == undefined) return null;
  return user;
};

const getUserCurrent = (): User | null => {
  const user = sessionStorage.getItem(SessionStorage.USER_CURRENT);
  if (user == null) return null;
  return JSON.parse(user);
};

const setUser = (user: User): void => {
  sessionStorage.setItem(SessionStorage.USER_CURRENT, JSON.stringify(user));
};

const removeUser = (): void => {
  sessionStorage.removeItem(SessionStorage.USER_CURRENT);
};

// List user
// Thêm user vào user list (sử dụng cho đăng ký)
const addUser = (user: User): void => {
  const listUser: User[] = getListUser();
  listUser.push(user);
  setListUser(listUser);
};
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
    setListUser(userData);
    return userData;
  }
};

// SAVE NEWS
const NEWS_KEY = 'savedNews';

const getNews = (): string[] => {
  const savedNews = sessionStorage.getItem(NEWS_KEY);
  return savedNews ? JSON.parse(savedNews) : [];
};

const saveNews = (id: string) => {
  const savedNews = getNews();
  if (!savedNews.includes(id)) {
    savedNews.push(id);
    sessionStorage.setItem(NEWS_KEY, JSON.stringify(savedNews));
  }
};

const removeNews = (id: string) => {
  const savedNews = getNews();
  const index = savedNews.indexOf(id);
  if (index !== -1) {
    savedNews.splice(index, 1);
    sessionStorage.setItem(NEWS_KEY, JSON.stringify(savedNews));
  }
};

export {
  addUser,
  getUser,
  setUser,
  removeUser,
  getListUser,
  setListUser,
  getNews,
  saveNews,
  removeNews,
};
