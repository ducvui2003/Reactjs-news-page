const COMMENTS_STORAGE_KEY = 'comments';

const saveToLocalStorage = (key: string, data: any) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error('Error saving to localStorage:', error);
    }
};

const getFromLocalStorage = <T>(key: string): T | null => {
    try {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error fetching from localStorage:', error);
    }
    return null;
};

export { COMMENTS_STORAGE_KEY, saveToLocalStorage, getFromLocalStorage };
