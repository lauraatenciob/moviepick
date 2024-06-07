import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Outlet />
      <Footer />
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
    </div>
  );
}

export default App;
