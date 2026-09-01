import { createContext, useState } from "react";

const Mycontext = createContext();
function Cartprovider({ children }) {
  const [cartitems, setcartitems] = useState([]);
  const [cartOpen, setcartOpen] = useState(false);
  const [showFloatingcart, setshowFloatingcart] = useState(false);
  const [quantity, setquantity] = useState({});

  const addtocart = (dish) => {
    setcartitems([...cartitems, dish]);
    setcartOpen(true);
  };
  const closemodal = () => {
    setcartOpen(false);
    setcartitems([]);
    setquantity({});
    setshowFloatingcart(false);
  };
  const handlequantitychange = (id, qty) => {
    setquantity((prev) => {
      const currentitem = prev[id] || 1;
      const nxt = Math.max(1, currentitem + qty);
      return { ...prev, [id]: nxt };
    });
  };
  const handlefloatingcart = () => {
    setcartOpen(false);
  };

  return (
    <Mycontext.Provider
      value={{
        cartitems,
        addtocart,
        cartOpen,
        setcartOpen,
        closemodal,
        handlequantitychange,
        quantity,
        showFloatingcart,
        handlefloatingcart,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
}
export { Mycontext };
export default Cartprovider;
