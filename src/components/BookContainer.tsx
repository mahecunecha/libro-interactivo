import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { mockPages } from '../assets/mockData';
import { PageRenderer } from './PageRenderer';
import { useBookSound } from '../hooks/useBookSound';

interface BookContainerProps {
    onPageChange?: (newPage: number) => void;
}

export const BookContainer: React.FC<BookContainerProps> = ({ onPageChange }) => {
    const bookRef = useRef<any>(null);
    const { playPaperTurn } = useBookSound();

    const handleFlip = (e: { data: number }) => {
        // Disparo inmediato del efecto sonoro con latencia mínima
        playPaperTurn();

        if (onPageChange) {
            onPageChange(e.data);
        }
    };

    return (
        <div className="book-stage">
            <HTMLFlipBook
                ref={bookRef}
                width={380}
                height={520}
                size="stretch"
                minWidth={300}
                maxWidth={500}
                minHeight={420}
                maxHeight={700}
                maxShadowOpacity={0.6}
                showCover={false}
                mobileScrollSupport={true}
                className="interactive-flipbook"
                onFlip={handleFlip}
            >
                {mockPages.map((page, index) => (
                    <PageRenderer
                        key={page.id}
                        page={page}
                        pageNumber={index + 1}
                    />
                ))}
            </HTMLFlipBook>
        </div>
    );
};