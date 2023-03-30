import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Single from './Components/Single/Single';

function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/info' element={<Single/>} />
    </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
