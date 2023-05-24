import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Settings from "./Pages/Settings";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/"element={<Home/>} ></Route>
      <Route exact path="/about"element={<About/>} ></Route>
      <Route exact path="/settings"element={<Settings/>} ></Route>


      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
