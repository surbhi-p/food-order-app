import { Fragment } from "react";
import Header from "./Component/Layout/Header";
import Meals from "./Component/Meals/Meals"
import { Cart } from "./Component/Cart/Cart";

// const [cartIsShow, setCartIsShow] = useState(false);

// const showCartHandler = () => {
//   setCartIsShow(true);
// }

const hideCartHandler = () => {
  console.log("close modal")
  // setCartIsShow(false);
}

function App() {
  return (
    <Fragment>
      <Cart onClose={hideCartHandler} />
      <Header/>
      <Meals />
    </Fragment>
  );
}

export default App;
