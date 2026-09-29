import useSound from 'use-sound';
import { PAPER_TURN_SOUND } from '../assets/audio/placeholderSfx';

export function useBookSound() {
    const [playPaperTurn] = useSound(PAPER_TURN_SOUND, {
        volume: 0.65,
        interrupt: true, // Corta la repetición previa si se hojea a alta velocidad
    });

    return {
        playPaperTurn,
    };
}