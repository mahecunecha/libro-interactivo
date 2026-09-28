import React, { forwardRef } from 'react';
import type { BookPage } from '../assets/mockData'; // <-- Agrega la palabra clave 'type'

interface PageProps {
    page: BookPage;
    pageNumber: number;
    totalNumberedPages?: number;
}

export const PageRenderer = forwardRef<HTMLDivElement, PageProps>(
    ({ page, pageNumber }, ref) => {
        return (
            <div ref={ref} className="page-sheet" data-density="soft">
                <div
                    className="page-content"
                    style={{ borderColor: page.imagePlaceholderColor }}
                >
                    <header className="page-header">
                        <h3>{page.title}</h3>
                    </header>

                    <main className="page-body">
                        <div
                            className="page-placeholder-art"
                            style={{ backgroundColor: page.imagePlaceholderColor }}
                        >
                            <span>[Zona de Arte / Ilustración]</span>
                        </div>
                        <p className="page-text">{page.content}</p>
                    </main>

                    <footer className="page-footer">
                        <span>Página {pageNumber}</span>
                    </footer>
                </div>
            </div>
        );
    }
);

PageRenderer.displayName = 'PageRenderer';