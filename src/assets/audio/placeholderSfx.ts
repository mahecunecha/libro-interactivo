// Genera un sonido sintético de fricción de papel codificado en base64 WAV
export function generatePaperTurnSfx(): string {
    const sampleRate = 22050;
    const duration = 0.22; // 220 milisegundos
    const numFrames = Math.floor(sampleRate * duration);
    const buffer = new ArrayBuffer(44 + numFrames * 2);
    const view = new DataView(buffer);

    const writeString = (offset: number, str: string) => {
        for (let i = 0; i < str.length; i++) {
            view.setUint8(offset + i, str.charCodeAt(i));
        }
    };

    // Cabecera formato RIFF / WAV
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + numFrames * 2, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true); // PCM
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    writeString(36, 'data');
    view.setUint32(40, numFrames * 2, true);

    // Síntesis de ruido blanco con envolvente decreciente (roce de papel)
    let lastOut = 0.0;
    for (let i = 0; i < numFrames; i++) {
        const white = Math.random() * 2 - 1;
        // Filtro paso bajo suave para opacar el ruido
        lastOut = (lastOut + 0.08 * white) / 1.08;
        const progress = i / numFrames;
        const envelope = Math.sin(progress * Math.PI) * Math.exp(-progress * 3);
        const sample = Math.max(-1, Math.min(1, lastOut * envelope * 2.8));
        view.setInt16(44 + i * 2, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
    }

    const bytes = new Uint8Array(buffer);
    let binary = '';
    for (let i = 0; i < bytes.byteLength; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return `data:audio/wav;base64,${btoa(binary)}`;
}

export const PAPER_TURN_SOUND = generatePaperTurnSfx();