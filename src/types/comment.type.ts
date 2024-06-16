import { User } from './user.type';

export interface Comment {
  id: string;
  userId: string;
  newsId: string;
  content: string;
  createAt: Date;
}
