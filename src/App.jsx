// It is best practice to divide each component in new file to keep the code readable and clean.


// Importing component from library
import { Routes, Route } from "react-router-dom";
// importing all needed components to build the final version of the application
import "./App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import ItemPage from "./pages/ItemPage";
import Layout from "./components/Layout";

// Building the logic of the application with Routes(static, dynamic, nested Routes)

function App() {
  return (
    <div>
      {/* <Navbar /> */}

      <Routes>
        {/* // Nesting the components in parent Route to use Outlet component from ReactRouter library for the structure of the layout */}
        <Route path="/" element={<Layout/>}>
          
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
