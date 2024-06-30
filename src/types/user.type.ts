export interface User {
  id: string;
  email: string;
  password: string;
  fullName?: string;
  phone?: string;
  birthDay?: string;
}

export interface UserLogin extends Omit<User, 'id'> {}
