
import Inicio from 'pages/Inicio';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModalProvider from 'contexts/ModalContext';
import ProdutosProvider from 'contexts/ProdutosContext';

function App() {
  return (
    <BrowserRouter>
      <ProdutosProvider>
        <ModalProvider>
          <Routes>
            <Route path='/' element={<Inicio />} />
          </Routes>
        </ModalProvider>
      </ProdutosProvider>
    </BrowserRouter>
  );
}

export default App;
