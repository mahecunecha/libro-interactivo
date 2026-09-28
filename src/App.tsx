import { BookContainer } from './components/BookContainer';

export default function App() {
  const handlePageChange = (pageIndex: number) => {
    // Escucha de eventos lista para conectar SFX y Narración en fases posteriores
    console.log(`Página activa actual: ${pageIndex}`);
  };

  return (
    <main className="canvas-container">
      <header className="book-app-header">
        <h1>Libro Interactivo</h1>
        <p>Arrastra las esquinas o bordes de las páginas para hojear</p>
      </header>
      <BookContainer onPageChange={handlePageChange} />
    </main>
  );
}