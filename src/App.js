import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from "./Pages/Products";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";
import Analytics from "./Pages/Analytics";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/"element={<Home/>} ></Route>
      <Route exact path="/products"element={<Products/>} ></Route>
      <Route exact path="/analytics"element={<Analytics/>} ></Route>

      <Route exact path="/settings"element={<Settings/>} ></Route>


      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
