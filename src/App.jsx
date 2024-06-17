import './App.css'
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Store from './pages/Store';
import ItemPage from './pages/ItemPage';
import Navbar from './components/Layout';

function App() {

  return (
    <div>
    <Navbar/>
    
    
   <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/ItemPage" element={<ItemPage />} />
   </Routes>


  </div>
  )
}



export default App
