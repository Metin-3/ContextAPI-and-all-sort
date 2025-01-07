import './App.css';
import { DataProvider } from './context/DataProvider';
import HomePage from './pages/HomePage';

function App() {


  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  )
}

export default App
