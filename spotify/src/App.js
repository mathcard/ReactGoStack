import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './config/reactotron';
import { GlobalStyle } from './styles/global';
import { Wrapper, Container, Content} from './styles/components';
import Routes from './routes';
import store from './store';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';

const App = () => (       
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>  
        <Container>
          <GlobalStyle/>
          <Sidebar/>
          <Content>
            <ErrorBox/>
            <Header/>
            <Routes/>
          </Content>
        </Container>
        <Player/>
      </Wrapper>
    </BrowserRouter>
  </Provider>
  );

export default App;
