import { Comment } from '../types/comment.type';

export const commentData: Comment[] = [
    {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
        userId: '1',
        newsId: 'A1',
        content: 'Hello world',
        createAt: new Date(),
    },
    {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
        userId: '2',
        newsId: 'A2',
        content: 'Hello world 2',
        createAt: new Date(),
    },
    {
        id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6e',
        userId: '3',
        newsId: 'A5',
        content: 'Hello world 2',
        createAt: new Date(),
    },
];
