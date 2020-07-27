import React, { useState } from 'react';

interface Card {
  titulo: string;
  url: string;
}

function FormField({ titulo }: { titulo?: string }): JSX.Element {
  return (
    <label>
      <input type="" />
      <span>{titulo}:</span>
    </label>
  );
}

function App(): JSX.Element {
  const [videos, setVideos] = useState<Card[]>([{ titulo: 'Video 01', url: '' }]);

  function setVideo(value: Card) {
    setVideos([
      ...videos,
      value,
    ]);
  }

  return (
    <main>
      <img
        className="logo"
        alt="Logo"
        src="https://raw.githubusercontent.com/imersao-alura/aluraflix/master/src/assets/img/Logo.png"
      />

      <form onSubmit={(event) => {
        event.preventDefault();
        setVideo({
          titulo: 'Título',
          url: 'URL do Vídeo',
        });
      }}>
        <FormField titulo="Título" />

        <label>
          <input type="" />
          <span>URL do Vídeo</span>
        </label>

        <button>
          Cadastrar
        </button>
      </form>


      <section className="listaDeVideos">
        <h2>
          Vídeos cadastrados
        </h2>
        <ul>
          {
            videos.map(() => (
              <a className="card" style={{ backgroundImage: 'https://placehold.it/1920x1080' }}>
                <article>
                  <h3 className="titulo">Título do vídeo</h3>
                </article>
              </a>
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default App;
