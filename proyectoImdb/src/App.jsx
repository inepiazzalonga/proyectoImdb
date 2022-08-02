import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Movies } from "./components/Movies/Movies";

function App() {
  return (
    <div className="App">
      <h1>Hola esta es la gran pagina de Ine y Luqui 🎉</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
