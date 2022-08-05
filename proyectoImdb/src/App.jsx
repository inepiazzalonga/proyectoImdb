import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home/Home";
import MovieCollectionContainer from "./pages/MovieCollectionContainer/MovieCollectionContainer";

function App() {
  return (
    <div className="App">
      <h1>Hola esta es la gran pagina de Ine y Luqui 🎉</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies" element={<MovieCollectionContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
