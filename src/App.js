import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import Header from './components/Header';

import GlobalStyle from './styles/global';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes />
      </Router>
      <GlobalStyle />
    </>
  );
};

export default App;
