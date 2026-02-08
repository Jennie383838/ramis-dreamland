import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Preview from "./pages/preview";
import About from "./pages/about";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <BrowserRouter>
        <Navbar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/preview/:id" element={<Preview />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<div className="container">Not Found</div>} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}
export default App;