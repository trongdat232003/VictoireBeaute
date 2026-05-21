import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import ScrollToTop from './components/common/ScrollToTop';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import AllCategoriesPage from './pages/AllCategoriesPage';
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

function App() {
  const { cartItems, addToCart, updateQuantity, removeFromCart, cartItemCount } = useCart();

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout cartItemCount={cartItemCount} />}>
          {/* Main Pages */}
          <Route index element={<HomePage onAddToCart={addToCart} />} />
          <Route path="products" element={<ProductsPage onAddToCart={addToCart} />} />
          <Route path="cart" element={<CartPage cartItems={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} />} />
          
          {/* Categories */}
          <Route path="categories" element={<AllCategoriesPage />} />
          <Route path="category/:categorySlug" element={<CategoryPage onAddToCart={addToCart} />} />
          <Route path="category/:categorySlug/:subcategorySlug" element={<CategoryPage onAddToCart={addToCart} />} />
          
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
