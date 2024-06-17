import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ItemPage from "./pages/ItemPage";

function App() {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        <Route>
          
         {/* // 2 Static Routes */}
          <Route index element={<Home />} />
         <Route path="store" element={<Store />} />
         {/* //dynamic route (declaired with :)  */}
          <Route path="store/:productid" element={<ItemPage />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
