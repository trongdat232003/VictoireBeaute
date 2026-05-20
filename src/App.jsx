import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import NewArrivalsPage from './pages/NewArrivalsPage';
import SkincarePage from './pages/SkincarePages';
import MakeupPage from './pages/MakeupPage';
import WellnessPage from './pages/WellnessPage';
import GiftSetsPage from './pages/GiftSetsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PromotionsPage from './pages/PromotionsPage';
import PrivacyPage from './pages/PrivacyPage';
import SustainabilityPage from './pages/SustainabilityPage';
import ShippingPage from './pages/ShippingPage';
import useCart from './hooks/useCart';
import { products } from './constants/mockData';

function App() {
  const { cartItems, addToCart, updateQuantity, removeFromCart, cartItemCount } = useCart();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout cartItemCount={cartItemCount} />}>
          {/* Main Pages */}
          <Route index element={<HomePage products={products} onAddToCart={addToCart} />} />
          <Route path="products" element={<ProductsPage products={products} onAddToCart={addToCart} />} />
          <Route path="cart" element={<CartPage cartItems={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} />} />
          
          {/* Category Pages */}
          <Route path="new-arrivals" element={<NewArrivalsPage />} />
          <Route path="skincare" element={<SkincarePage />} />
          <Route path="makeup" element={<MakeupPage />} />
          <Route path="wellness" element={<WellnessPage />} />
          <Route path="gift-sets" element={<GiftSetsPage />} />
          
          {/* Info Pages */}
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="promotions" element={<PromotionsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="sustainability" element={<SustainabilityPage />} />
          <Route path="shipping" element={<ShippingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
