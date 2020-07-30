import React, { useState } from 'react';

function getYouTubeId(youtubeURL: string) {
  return youtubeURL.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/, '$7');
}

interface IVideo {
  url: string;
  titulo: string;
}

function App() {
  const videos: IVideo[] = [
    {
      url: 'https://www.youtube.com/watch?v=5MzOCxSWrrc',
      titulo: 'Recriando o React em 20min',
    }
  ];

  const [videosDoState, setVideosNoState] = useState<IVideo[]>([]);

  return (
    <main>
      <img
        className="logo"
        alt="Logo"
        src="https://raw.githubusercontent.com/imersao-alura/aluraflix/master/src/assets/img/Logo.png"
      />

      <form onSubmit={(event) => {
        event.preventDefault();

        setVideosNoState([
          ...videosDoState,
          {
            url: 'https://www.youtube.com/watch?v=5MzOCxSWrrc',
            titulo: 'Recriando o React em 20min',
          }
        ]);
      }}>
        <label>
          <input type="" />
          <span>Título do Vídeo</span>
        </label>

        <label>
          <input type="" />
          <span>URL do Vídeo</span>
        </label>

        <button type="submit">
          Cadastrar
        </button>
      </form>



      <section className="listaDeVideos">
        <h2>
          Vídeos cadastrados
        </h2>
        <ul>
          {
            videosDoState.map((video) => (
              <a
                className="card"
                href={video.url}
                style={{ backgroundImage: `url(https://img.youtube.com/vi/${getYouTubeId(video.url)}/maxresdefault.jpg)` }}>
                <article>
                  <h3 className="titulo">{video.titulo}</h3>
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
