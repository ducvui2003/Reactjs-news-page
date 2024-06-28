export interface User {
  id: string;
  email: string;
  password: string;
}

export interface UserInfo extends User {
  fullName?: string;
  phone?: string;
  birthDay?: Date;
}
