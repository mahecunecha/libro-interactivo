import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import { useBookStore } from '../store/useBookStore';
import { mockPages } from '../assets/mockData';

export function useNarrator() {
    const { currentPage, isNarratorEnabled } = useBookStore();
    const currentSoundRef = useRef<Howl | null>(null);

    useEffect(() => {
        // 1. Detener y descargar de memoria cualquier pista que esté sonando
        if (currentSoundRef.current) {
            currentSoundRef.current.stop();
            currentSoundRef.current.unload();
            currentSoundRef.current = null;
        }

        // 2. Si el interruptor está apagado, no iniciar nueva pista
        if (!isNarratorEnabled) return;

        const page = mockPages[currentPage];
        if (!page || !page.audioSrc) return;

        // 3. Cargar y reproducir la pista de voz grabada de la página activa
        const sound = new Howl({
            src: [page.audioSrc],
            html5: true, // Optimizado para audios largos de voz
            volume: 1.0,
            onend: () => {
                // Callback listo por si más adelante quieres pasar la hoja automáticamente al acabar
            },
        });

        currentSoundRef.current = sound;
        sound.play();

        // 4. Limpieza si el componente se desmonta
        return () => {
            if (sound) {
                sound.stop();
                sound.unload();
            }
        };
    }, [currentPage, isNarratorEnabled]);
}