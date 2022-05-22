import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";

// Import all views
import HomeView from "./views/HomeView";
import CartView from "./views/CartView";
import ProductView from "./views/ProductView";
import Sidebar from "./components/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar toggle={() => setShowSidebar(true)} />
      <Sidebar show={showSidebar} toggle={() => setShowSidebar(false)} />
      <Backdrop show={showSidebar} toggle={() => setShowSidebar(false)} />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/product/:id" element={<ProductView />} />
          <Route path="/cart" element={<CartView />} />
          <Route />
        </Routes>
      </main>
      {/* Home Screen View */}
      {/* Products Screen View */}
      {/* Cart Screen View */}
    </div>
  );
}

export default App;
