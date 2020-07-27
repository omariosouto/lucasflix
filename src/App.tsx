import React, { useState } from 'react';

interface Card {
  titulo: string;
  url: string;
}

function App() {
  const [videos, setVideos] = useState<Card[]>([]);

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
        <label>
          <input type="" />
          <span>Título do Vídeo</span>
        </label>

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
