import { nanoid } from 'nanoid';

export const ITEMS = [
    {
        id: nanoid(),
        text: "Do homework",
        date: new Date().toLocaleString(),
        completed: false
    }
]