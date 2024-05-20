import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import "./App.css";
import CategoryPage from "./pages/CategoryPage/CategoryPage";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
