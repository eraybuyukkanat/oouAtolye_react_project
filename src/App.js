import Main from './components/pages/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {



  return (
    <>
    <BrowserRouter>
      <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
