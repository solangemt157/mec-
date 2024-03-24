
import * as S from;

//Importação dos components
import Header from;
import Main from;

function App() {
  return (
    <>
      {/* "S.GlobalStyle" esta resetando toda a pagina  */}
      <S.GlobalStyle />
      <Header />
      <Main />
    </>
  );
}

export default App;
