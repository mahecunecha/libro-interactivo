export interface BookPage {
    id: number;
    title: string;
    content: string;
    imagePlaceholderColor: string;
    audioSrc?: string; // Ruta al archivo de audio grabado
}

export const mockPages: BookPage[] = [
    {
        id: 1,
        title: 'Cover',
        content: 'Interactive English Reader. Narration by Sergio.',
        imagePlaceholderColor: '#2c3e50',
        audioSrc: '', // Dejar en blanco mientras grabas o enlazar archivo de prueba
    },
    {
        id: 2,
        title: 'Chapter 1: The Beginning',
        content: 'Once upon a time, in a small town surrounded by dense green hills, an unexpected journey began.',
        imagePlaceholderColor: '#34495e',
        audioSrc: '',
    },
    {
        id: 3,
        title: 'Chapter 2: The Discovery',
        content: 'Walking through the quiet forest path, a mysterious stone structure emerged from the thick morning fog.',
        imagePlaceholderColor: '#16a085',
        audioSrc: '',
    },
    {
        id: 4,
        title: 'End of Chapter',
        content: 'Thank you for listening. End of submission.',
        imagePlaceholderColor: '#2c3e50',
        audioSrc: '',
    },
];