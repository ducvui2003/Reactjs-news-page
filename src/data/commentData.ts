import { Comment } from '../types/comment.type';

export const commentData: Comment[] = [
    {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        user: { id: 'user1', email: 'user1@example.com', password: 'password1' },
        newsId: 'A1',
        content: 'Hello world',
        createAt: new Date().toISOString(),
    },
    {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
        user: { id: 'user2', email: 'user2@example.com', password: 'password2' },
        newsId: 'A2',
        content: 'Hello world 2',
        createAt: new Date().toISOString(),
    },
    {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
        user: { id: 'user2', email: 'user2@example.com', password: 'password2' },
        newsId: 'A5',
        content: 'Hello world 2',
        createAt: new Date().toISOString(),
    },
];
