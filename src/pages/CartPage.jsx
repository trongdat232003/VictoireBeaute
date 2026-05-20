import { useNavigate } from 'react-router-dom';
import CartItem from '../components/features/cart/CartItem';
import CartSummary from '../components/features/cart/CartSummary';

const CartPage = ({ cartItems, onUpdateQuantity, onRemoveItem }) => {
  const navigate = useNavigate();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert('Chức năng thanh toán sẽ được phát triển!');
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-20 py-16 text-center">
        <span className="material-symbols-outlined text-6xl text-outline mb-4">shopping_bag</span>
        <h1 className="font-headline-md text-headline-md mb-4">Giỏ hàng trống</h1>
        <p className="text-secondary mb-8">Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
        <button
          onClick={() => navigate('/')}
          className="bg-primary text-on-primary px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Tiếp tục mua sắm
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-[1200px] mx-auto w-full px-4 md:px-20 py-16">
      <h1 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md mb-8">
        Giỏ hàng của bạn
      </h1>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items List */}
        <div className="lg:w-2/3 glass-panel rounded-xl p-6">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-outline-variant/30 text-secondary font-label-caps text-label-caps uppercase">
            <div className="col-span-6">Sản phẩm</div>
            <div className="col-span-2 text-center">Số lượng</div>
            <div className="col-span-3 text-right">Giá</div>
            <div className="col-span-1 text-right"></div>
          </div>

          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onUpdateQuantity={onUpdateQuantity}
              onRemove={onRemoveItem}
            />
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:w-1/3">
          <CartSummary
            subtotal={subtotal}
            shipping={0}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
