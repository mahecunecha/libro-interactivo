export interface BookPage {
    id: number;
    title: string;
    content: string;
    imagePlaceholderColor: string;
}

export const mockPages: BookPage[] = [
    {
        id: 1,
        title: 'Portada',
        content: 'Título provisional de la obra interactiva.',
        imagePlaceholderColor: '#3a3a3a',
    },
    {
        id: 2,
        title: 'Página 1',
        content: 'Texto de prueba para validar el diseño y flujo de lectura.',
        imagePlaceholderColor: '#4a4a4a',
    },
    {
        id: 3,
        title: 'Página 2',
        content: 'Contenido adicional para verificar las físicas de giro de hoja.',
        imagePlaceholderColor: '#5a5a5a',
    },
    {
        id: 4,
        title: 'Contraportada',
        content: 'Fin de la demostración.',
        imagePlaceholderColor: '#2b2b2b',
    },
];