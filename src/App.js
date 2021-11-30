import './App.css';
import Home from './components/Pages/Home';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import ManagementApp from './manApp/ManagementApp';
import WoodenFur from './components/Pages/WoodenFur/WoodenFur';
import Honda from './components/Pages/Honda/Honda';


function App() {
  return (
    <div className=" bg-gray-700">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manApp" element={<ManagementApp />} />
          <Route path="/woodenFur" element={<WoodenFur/>} />
          <Route path="/honda" element={<Honda/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
