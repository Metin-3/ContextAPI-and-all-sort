import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataProvider';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './App.css';

function App() {


  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
