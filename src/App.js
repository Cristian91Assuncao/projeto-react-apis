// import Header from './Components/Header/Header';
import { ChakraProvider } from '@chakra-ui/react';
import Router from './routes/Router';
import { theme } from './styles';
// import { Body, GlobalStyle } from './GlobalStyle';

function App() {


  return (
    <div className="App">
      {/* <Body>
      <GlobalStyle /> */}
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
      {/* </Body>  */}

    </div>
  );
}

export default App;
