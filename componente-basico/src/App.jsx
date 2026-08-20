import Cabecalho from './components/Cabecalho';

function App() {
  return (
    <div>
      {/* 4. Utilizando o componente criado */}
      <Cabecalho />
      <main style={{ padding: '20px' }}>
        <p>Conteúdo principal do app...</p>
      </main>
    </div>
  );
}

export default App;