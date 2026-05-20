# 🚀 Hướng Dẫn Phát Triển - Victoire Beauté

## ✅ Đã Hoàn Thành

### 1. Chuyển đổi HTML sang React
- ✅ Homepage (homepage.html → HomePage.jsx)
- ✅ Products Page (product.html → ProductsPage.jsx)
- ✅ Cart Page (card.html → CartPage.jsx)

### 2. Kiến trúc dự án
- ✅ Component-based architecture
- ✅ Feature-based folder structure
- ✅ Reusable components (Button, Icon, ProductCard)
- ✅ Layout components (Header, Footer, MainLayout)
- ✅ Custom hooks (useCart)
- ✅ Routing với React Router

### 3. Styling
- ✅ Tailwind CSS integration
- ✅ Custom theme configuration
- ✅ Google Fonts (Be Vietnam Pro, Noto Serif)
- ✅ Material Symbols icons
- ✅ Glass morphism effects

## 🎯 Cách Thêm Tính Năng Mới

### Ví dụ 1: Thêm trang "About Us"

#### Bước 1: Tạo page component
```jsx
// src/pages/AboutPage.jsx
const AboutPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-20 py-16">
      <h1 className="font-headline-md text-headline-md mb-8">
        Về Chúng Tôi
      </h1>
      <p className="font-body-lg text-body-lg text-secondary">
        Nội dung về công ty...
      </p>
    </div>
  );
};

export default AboutPage;
```

#### Bước 2: Thêm route trong App.jsx
```jsx
import AboutPage from './pages/AboutPage';

// Trong <Routes>
<Route path="/about" element={<AboutPage />} />
```

#### Bước 3: Cập nhật navigation (nếu cần)
```jsx
// src/constants/navigation.js
export const footerLinks = [
  { label: 'About Us', path: '/about' }, // Đã có sẵn
  // ...
];
```

### Ví dụ 2: Thêm chức năng Wishlist

#### Bước 1: Tạo custom hook
```jsx
// src/hooks/useWishlist.js
import { useState, useEffect } from 'react';

const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find(item => item.id === product.id)) {
        return prev; // Already in wishlist
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item => item.id === productId);
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };
};

export default useWishlist;
```

#### Bước 2: Tạo feature components
```jsx
// src/components/features/wishlist/WishlistButton.jsx
import Icon from '../../common/Icon';

const WishlistButton = ({ productId, isInWishlist, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(productId)}
      className="text-outline hover:text-primary transition-colors"
    >
      <Icon 
        name={isInWishlist ? 'favorite' : 'favorite_border'} 
        filled={isInWishlist}
      />
    </button>
  );
};

export default WishlistButton;
```

#### Bước 3: Tích hợp vào App.jsx
```jsx
import useWishlist from './hooks/useWishlist';

function App() {
  const { cartItems, addToCart, ... } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Pass to components as needed
}
```

#### Bước 4: Sử dụng trong ProductCard
```jsx
// src/components/common/ProductCard.jsx
import WishlistButton from '../features/wishlist/WishlistButton';

const ProductCard = ({ product, onAddToCart, isInWishlist, onToggleWishlist }) => {
  return (
    <div className="...">
      <WishlistButton
        productId={product.id}
        isInWishlist={isInWishlist(product.id)}
        onToggle={() => onToggleWishlist(product)}
      />
      {/* Rest of card */}
    </div>
  );
};
```

### Ví dụ 3: Thêm Product Detail Page

#### Bước 1: Tạo page
```jsx
// src/pages/ProductDetailPage.jsx
import { useParams } from 'react-router-dom';
import Button from '../components/common/Button';

const ProductDetailPage = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-20 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-headline-md text-headline-md mb-4">
            {product.name}
          </h1>
          <p className="font-body-lg text-body-lg text-secondary mb-6">
            {product.description}
          </p>
          <p className="font-display-lg-mobile text-display-lg-mobile text-primary mb-8">
            {formatPrice(product.price)}
          </p>
          <Button 
            onClick={() => onAddToCart(product)}
            size="lg"
            icon="shopping_bag"
          >
            Thêm vào giỏ hàng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
```

#### Bước 2: Thêm route với parameter
```jsx
// App.jsx
<Route 
  path="/product/:id" 
  element={<ProductDetailPage products={products} onAddToCart={addToCart} />} 
/>
```

#### Bước 3: Link từ ProductCard
```jsx
// ProductCard.jsx
import { Link } from 'react-router-dom';

<Link to={`/product/${id}`}>
  <h3>{name}</h3>
</Link>
```

## 🔧 Các Pattern Thường Dùng

### 1. Conditional Rendering
```jsx
{isLoading ? (
  <div>Loading...</div>
) : (
  <ProductList products={products} />
)}
```

### 2. List Rendering
```jsx
{products.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
```

### 3. Event Handling
```jsx
const handleClick = (id) => {
  console.log('Clicked:', id);
};

<button onClick={() => handleClick(product.id)}>
  Click me
</button>
```

### 4. Form Handling
```jsx
const [formData, setFormData] = useState({ name: '', email: '' });

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Process form
};

<form onSubmit={handleSubmit}>
  <input 
    name="name"
    value={formData.name}
    onChange={handleChange}
  />
</form>
```

### 5. API Integration (Future)
```jsx
// src/hooks/useProducts.js
import { useState, useEffect } from 'react';

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { products, loading, error };
};
```

## 📦 Thêm Dependencies Mới

```bash
# State management
npm install zustand
# hoặc
npm install @reduxjs/toolkit react-redux

# Data fetching
npm install @tanstack/react-query axios

# Form handling
npm install react-hook-form zod

# UI Components
npm install @headlessui/react
npm install framer-motion

# Date handling
npm install date-fns

# Icons (nếu cần thêm)
npm install react-icons
```

## 🎨 Tailwind Classes Thường Dùng

### Layout
```jsx
// Container
className="max-w-[1200px] mx-auto px-4 md:px-20"

// Grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"

// Flex
className="flex items-center justify-between gap-4"
```

### Typography
```jsx
// Heading
className="font-headline-md text-headline-md text-on-surface"

// Body
className="font-body-lg text-body-lg text-secondary"

// Label
className="font-label-caps text-label-caps uppercase"
```

### Colors
```jsx
// Primary
className="bg-primary text-on-primary"

// Surface
className="bg-surface text-on-surface"

// Container
className="bg-surface-container"
```

### Effects
```jsx
// Hover
className="hover:opacity-80 hover:scale-105 transition-all"

// Glass effect
className="glass-panel"

// Shadow
className="soft-shadow"
```

## 🐛 Debugging Tips

### 1. React DevTools
- Cài extension React Developer Tools
- Inspect component props và state

### 2. Console Logging
```jsx
console.log('Product:', product);
console.log('Cart Items:', cartItems);
```

### 3. Breakpoints
- Sử dụng `debugger;` trong code
- Hoặc set breakpoints trong browser DevTools

## 📚 Resources

- [React Docs](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🚀 Next Steps

1. **Authentication**: Thêm login/register
2. **Product Search**: Tìm kiếm sản phẩm
3. **Filters**: Lọc sản phẩm nâng cao
4. **Reviews**: Đánh giá sản phẩm
5. **Checkout**: Quy trình thanh toán
6. **Admin Panel**: Quản lý sản phẩm
7. **API Integration**: Kết nối backend
8. **Testing**: Unit tests, E2E tests
9. **Performance**: Code splitting, lazy loading
10. **SEO**: Meta tags, sitemap

## 💡 Tips

- Luôn tạo components nhỏ, tái sử dụng được
- Đặt tên rõ ràng, có ý nghĩa
- Comment code phức tạp
- Commit thường xuyên với message rõ ràng
- Test trên nhiều devices/browsers
- Optimize images trước khi deploy
- Sử dụng TypeScript cho type safety (optional)
