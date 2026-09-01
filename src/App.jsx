import { Routes, Route } from "react-router-dom";
import OrderMethod from "./COMPONENTS/orderMethod";
import Home from "./COMPONENTS/Home";
import Cart from "./COMPONENTS/cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderMethod />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
export default App;
