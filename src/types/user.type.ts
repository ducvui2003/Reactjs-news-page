export interface User {
  id: string;
  email: string;
  password: string;
}

export interface UserLogin extends Omit<User, 'id'> {}

export interface UserInfo extends User {
  fullName?: string;
  phone?: string;
  birthDay?: Date;
}
