import { Comment } from '../types/comment.type';

export const commentData: Comment[] = [
    {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        user: { id: 'user1', email: 'user1@example.com', password: 'password1' },
        newsId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        content: 'Hello world',
        createAt: new Date(),
    },
    {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
        user: { id: 'user2', email: 'user2@example.com', password: 'password2' },
        newsId: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
        content: 'Hello world 2',
        createAt: new Date(),
    },
];
