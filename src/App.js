import { Outlet, ScrollRestoration } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Outlet />
      <ScrollRestoration
        getKey={(location, matches) => {
          return location.pathname;
        }}
      />
    </div>
  );
}

export default App;
