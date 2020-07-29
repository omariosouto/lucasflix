import React, { useState } from 'react';
import { FormField } from './components/FormField';

function getYouTubeId(youtubeURL: string) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

interface Card {
  titulo: string;
  url: string;
}

function App(): JSX.Element {
  const videoInicial = {
    titulo: 'Video 01',
    url: 'https://www.youtube.com/watch?v=5MzOCxSWrrc',
  }
  const [values, setValues] = useState<Card>({ titulo: '', url: '' });
  const [videos, setVideos] = useState<Card[]>([videoInicial]);

  function setVideo(value: Card) {
    setVideos([
      ...videos,
      value,
    ]);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const name = event.target.getAttribute('name') || ''; 
    const value = event.target.value;

    setValues({
      ...values,
      [name]: value,
    })
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
          titulo: values.titulo,
          url: values.url,
        });
      }}>
        <FormField
          label="Título"
          name="titulo"
          onChange={handleChange}
          value={values.titulo}
          type="text"
        />

        <FormField
          label="URL"
          name="url"
          onChange={handleChange}
          value={values.url}
          type="text"
        />
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
            videos.map((video) => (
              <a
                href={video.url}
                key={video.titulo}
                className="card"
                style={{
                  color: 'red',
                  backgroundImage: `url(https://img.youtube.com/vi/${getYouTubeId(video.url)}/maxresdefault.jpg)`
                }}
              >
                <span className="titulo">Título do vídeo</span>
              </a>
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default App;
