import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
// Import all views
import HomeView from "./views/HomeView";
import CartView from "./views/CartView";
import ProductView from "./views/ProductView";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      {/* Backdrop */}
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
