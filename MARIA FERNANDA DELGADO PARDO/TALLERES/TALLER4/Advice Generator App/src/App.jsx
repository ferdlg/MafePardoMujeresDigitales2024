import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/Home'
import { Provider } from './context/provider';

function App() {

  return (
    <Provider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
