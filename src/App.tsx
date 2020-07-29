import React from 'react';

function App() {
  return (
    <main>
      <img
        className="logo"
        alt="Logo"
        src="https://raw.githubusercontent.com/imersao-alura/aluraflix/master/src/assets/img/Logo.png"
      />

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


      <section className="listaDeVideos">
        <h2>
          Vídeos cadastrados
        </h2>
        <ul>
          {
            [1, 2, 3, 4, 5, 6].map(() => (
              <li className="card" style={{ backgroundImage: 'url(https://placehold.it/1920x1080)' }}>
                <article>
                  <h3 className="titulo">Título do vídeo</h3>
                </article>
              </li>
            ))
          }
        </ul>
      </section>
    </main>
  );
}

export default App;
