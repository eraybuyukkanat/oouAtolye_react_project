import Main from './components/pages/Main';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

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
