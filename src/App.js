import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hola" element={<span>Hola</span>} />
      </Routes>
    </div>
  );
}

export default App;
