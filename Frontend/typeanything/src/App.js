
import './App.css';
import { BrowserRouter , Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home/Home'


import Admin from './pages/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
         <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
