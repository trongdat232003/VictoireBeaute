# Victoire Beauté - Kiến Trúc Dự Án

## 📁 Cấu Trúc Thư Mục

```
src/
├── components/              # Reusable components
│   ├── common/             # Shared components dùng chung
│   │   ├── Button.jsx      # Component button với nhiều variants
│   │   ├── Icon.jsx        # Component icon wrapper
│   │   └── ProductCard.jsx # Card hiển thị sản phẩm
│   │
│   ├── layout/             # Layout components
│   │   ├── Header.jsx      # Header/Navigation bar
│   │   ├── Footer.jsx      # Footer
│   │   └── MainLayout.jsx  # Main layout wrapper
│   │
│   └── features/           # Feature-specific components
│       └── cart/           # Cart feature components
│           ├── CartItem.jsx    # Item trong giỏ hàng
│           └── CartSummary.jsx # Tóm tắt đơn hàng
│
├── pages/                  # Page components (Routes)
│   ├── HomePage.jsx        # Trang chủ
│   ├── ProductsPage.jsx    # Trang danh sách sản phẩm
│   └── CartPage.jsx        # Trang giỏ hàng
│
├── hooks/                  # Custom React hooks
│   └── useCart.js          # Hook quản lý giỏ hàng
│
├── utils/                  # Utility functions
│   └── formatters.js       # Functions format giá, số, etc.
│
├── constants/              # Constants và config
│   ├── navigation.js       # Navigation menu items
│   ├── theme.js           # Theme configuration
│   └── mockData.js        # Mock data cho development
│
├── assets/                 # Static assets
│   └── ...                # Images, fonts, etc.
│
├── App.jsx                # Main App component với routing
├── main.jsx              # Entry point
└── index.css             # Global styles với Tailwind
```

## 🏗️ Kiến Trúc Component

### 1. **Layout Components** (`components/layout/`)
- Các component định nghĩa cấu trúc chung của trang
- Được sử dụng trong tất cả các pages
- Ví dụ: Header, Footer, MainLayout

### 2. **Common Components** (`components/common/`)
- Components tái sử dụng được trong nhiều nơi
- Không phụ thuộc vào business logic cụ thể
- Ví dụ: Button, Icon, ProductCard

### 3. **Feature Components** (`components/features/`)
- Components liên quan đến một tính năng cụ thể
- Được tổ chức theo feature (cart, product, user, etc.)
- Ví dụ: CartItem, CartSummary

### 4. **Pages** (`pages/`)
- Components đại diện cho một route/page
- Kết hợp các components nhỏ hơn
- Xử lý logic cấp cao của page

## 🔧 Custom Hooks

### `useCart` Hook
Quản lý state và logic của giỏ hàng:
- `cartItems`: Danh sách items trong giỏ
- `addToCart(product)`: Thêm sản phẩm vào giỏ
- `updateQuantity(id, quantity)`: Cập nhật số lượng
- `removeFromCart(id)`: Xóa sản phẩm
- `clearCart()`: Xóa toàn bộ giỏ hàng
- `cartItemCount`: Tổng số items

## 📦 State Management

Hiện tại sử dụng:
- **React Hooks** (useState, useEffect) cho local state
- **Custom Hooks** (useCart) cho shared logic
- **localStorage** để persist cart data

Khi mở rộng, có thể thêm:
- Redux Toolkit hoặc Zustand cho global state phức tạp
- React Query cho data fetching và caching

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Theme**: Định nghĩa trong `tailwind.config.js`
- **Google Fonts**: Be Vietnam Pro, Noto Serif
- **Material Symbols**: Icons

## 🚀 Routing

Sử dụng **React Router v6**:
- `/` - HomePage
- `/products` - ProductsPage (tất cả sản phẩm)
- `/skincare` - ProductsPage (filtered)
- `/cart` - CartPage

## 📝 Quy Tắc Khi Thêm Tính Năng Mới

### 1. Tạo Component Mới

**Common Component:**
```jsx
// src/components/common/NewComponent.jsx
const NewComponent = ({ prop1, prop2 }) => {
  return (
    <div>
      {/* Component content */}
    </div>
  );
};

export default NewComponent;
```

**Feature Component:**
```jsx
// src/components/features/featureName/ComponentName.jsx
const ComponentName = ({ data, onAction }) => {
  // Feature-specific logic
  return <div>{/* ... */}</div>;
};

export default ComponentName;
```

### 2. Tạo Page Mới

```jsx
// src/pages/NewPage.jsx
import Layout from '../components/layout/MainLayout';
import Component1 from '../components/common/Component1';

const NewPage = () => {
  return (
    <div>
      <Component1 />
      {/* Page content */}
    </div>
  );
};

export default NewPage;
```

Thêm route trong `App.jsx`:
```jsx
<Route path="/new-page" element={<NewPage />} />
```

### 3. Tạo Custom Hook

```jsx
// src/hooks/useFeature.js
import { useState, useEffect } from 'react';

const useFeature = () => {
  const [state, setState] = useState(initialState);
  
  // Logic here
  
  return {
    state,
    actions,
  };
};

export default useFeature;
```

### 4. Thêm Utility Function

```jsx
// src/utils/helpers.js
export const helperFunction = (param) => {
  // Logic
  return result;
};
```

### 5. Thêm Constants

```jsx
// src/constants/config.js
export const CONFIG_NAME = {
  key: 'value',
};
```

## 🔄 Data Flow

```
User Action
    ↓
Page Component
    ↓
Custom Hook (useCart, etc.)
    ↓
Update State
    ↓
Re-render Components
```

## 🎯 Best Practices

1. **Component Naming**: PascalCase (ProductCard.jsx)
2. **File Organization**: Nhóm theo feature, không theo type
3. **Props**: Destructure props trong function parameters
4. **State**: Giữ state ở component thấp nhất có thể
5. **Reusability**: Tạo common components cho UI patterns lặp lại
6. **Separation of Concerns**: Logic riêng, UI riêng
7. **Custom Hooks**: Extract logic phức tạp hoặc reusable

## 📚 Tech Stack

- **React 19** - UI Library
- **React Router v6** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **ESLint** - Code linting

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 Tài Liệu Tham Khảo

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
