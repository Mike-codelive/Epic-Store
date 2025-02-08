import "./App.css";
import {
  Footer,
  Home,
  DownloadApps,
  Navbar,
  LogIn,
  SignUp,
  ShoppingCart,
  Shop,
  ProductDetails,
} from "./components";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";
import { CartProvider } from "./context/Cart";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:productId" element={<ProductDetails />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/shopping" element={<ShoppingCart />} />
        <Route path="/download" element={<DownloadApps />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center w-full">
        <CartProvider>
          <Navbar />
          <div className="max-w-[1440px] w-full">
            <AnimatedRoutes />
          </div>
        </CartProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
