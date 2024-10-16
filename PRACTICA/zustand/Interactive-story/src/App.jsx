import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import './App.css'
import { Home } from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
