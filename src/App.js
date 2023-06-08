import { useState } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals"
import { Cart } from "./Component/Cart/Cart";
import CartProvider from "./Component/Store/CartProvidder";

function App() {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  }

  const hideCartHandler = () => {
    setCartIsShow(false);
  }
  return (
    <CartProvider>
      {cartIsShow && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <Meals />
    </CartProvider>
  );
}

export default App;
