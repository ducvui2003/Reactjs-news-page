import { User } from './user.type';

export interface Comment {
  id: string;
  user: User;
  newsId: string;
  content: string;
  createAt: string;
}
