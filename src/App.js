
import Inicio from 'pages/Inicio';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ModalProvider from 'contexts/ModalContext';

function App() {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes>
          <Route path='/' element={<Inicio />} />
        </Routes>
      </ModalProvider>
    </BrowserRouter>
  );
}

export default App;
