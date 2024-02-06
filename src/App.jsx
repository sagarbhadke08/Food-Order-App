import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import {CartContextProvider} from './Store/CartContext.jsx';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
