import { Routes, Route } from "react-router-dom";
import { Checkout } from "./components/Checkout/checkout.component";
import Home from "./components/routescomponents/homeroute/home.component";
import Nav from "./components/routescomponents/NavRoute/nav";
import Sign from "./components/routescomponents/NavRoute/signin/signin";
import Shop from "./components/shop-data/shopdata";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Sign />} />
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
    </Routes>
  );
}

export default App;
