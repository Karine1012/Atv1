// 1. Declaração da Função (Componente)

function Cabecalho() {
  // 2. Retorno do JSX (sempre com um elemento pai englobando, neste caso o header)
return(
    <header style={{ backgroundColor: '#282c34', color: 'white', padding: '20px', textAlign: 'center' }}>
		<h1>Meu Primeiro Componente</h1>
		<p>Revisando React no PEND2!</p>
    </header>
);
}

// 3. Exportação para uso em outros arquivos
//??
export default Cabecalho;