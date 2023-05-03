
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Customer from "./pages/Customer"
import Navbar from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/catalog" element={<Catalog/>}/>
          <Route path="/customer" element={<Customer/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
