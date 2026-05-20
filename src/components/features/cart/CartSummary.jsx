import { formatPrice } from '../../../utils/formatters';
import Button from '../../common/Button';

const CartSummary = ({ subtotal, shipping = 0, onCheckout }) => {
  const total = subtotal + shipping;

  return (
    <div className="glass-panel rounded-xl p-6 sticky top-[100px]">
      <h2 className="font-title-lg text-title-lg mb-6 border-b border-outline-variant/30 pb-4">
        Tóm tắt đơn hàng
      </h2>

      <div className="flex justify-between font-body-lg text-body-lg mb-4 text-secondary">
        <span>Tạm tính</span>
        <span>{formatPrice(subtotal)}</span>
      </div>

      <div className="flex justify-between font-body-lg text-body-lg mb-6 text-secondary">
        <span>Phí vận chuyển</span>
        <span>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span>
      </div>

      <div className="flex justify-between font-headline-md-mobile text-headline-md-mobile text-on-surface mb-8 border-t border-outline-variant/30 pt-4">
        <span>Tổng cộng</span>
        <span>{formatPrice(total)}</span>
      </div>

      <Button
        onClick={onCheckout}
        className="w-full"
        icon="arrow_forward"
      >
        Tiến hành Thanh toán
      </Button>

      <div className="mt-6 flex flex-col gap-3 font-body-sm text-body-sm text-secondary">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">lock</span>
          <span>Thanh toán bảo mật an toàn</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">keyboard_return</span>
          <span>Đổi trả dễ dàng trong 30 ngày</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
