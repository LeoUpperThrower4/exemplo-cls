import { useState } from 'react';
import './App.css';

function App() {
  let [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 2000);

  return (
    <div className='container'>
      {/* show only if var isLoaded is true */}
      {isLoaded && (
        <div className='advertisement'>
          <p>GOOGLE ADS</p>
        </div>
      )}

      <article>
        <h1>Dieta saudável</h1>
        <p>
          Uma dieta saudável é aquela que fornece ao corpo todos os nutrientes
          necessários para funcionar corretamente. Existem muitos pontos de
          vista diferentes sobre o que é uma dieta saudável. Aqui estão alguns
          princípios gerais.
        </p>
        <img
          src='https://via.placeholder.com/150'
          alt='Imagem de uma dieta saudável'
        />
        <p>Uma dieta saudável pode conter os seguintes alimentos:</p>
        <ul>
          <li>Batata frita</li>
          <li>Pastel</li>
          <li>McDonalds</li>
          <li>Coca-cola</li>
        </ul>
        <button>
          Comprar agora <span>🛒</span>
        </button>
      </article>
    </div>
  );
}

export default App;
