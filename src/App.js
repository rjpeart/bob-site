import "./App.css";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project"
import Footer from "./components/Footer";

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path = '/' />
        <Route element={<Project/>} path = '/project/:slug' />
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  )
}

export default App;
