import { formatPrice } from '../../../utils/formatters';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  const { id, name, description, price, image, quantity } = item;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-6 border-b border-outline-variant/30 items-center">
      <div className="col-span-1 md:col-span-6 flex gap-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex flex-col justify-center">
          <h3 className="font-title-lg text-title-lg text-on-surface">{name}</h3>
          <p className="font-body-sm text-body-sm text-secondary mt-1">{description}</p>
        </div>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-start md:justify-center items-center mt-2 md:mt-0">
        <div className="flex items-center border border-outline-variant rounded-full px-3 py-1">
          <button
            onClick={() => onUpdateQuantity(id, quantity - 1)}
            className="text-secondary hover:text-primary px-1"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="font-body-lg text-body-lg mx-3">{quantity}</span>
          <button
            onClick={() => onUpdateQuantity(id, quantity + 1)}
            className="text-secondary hover:text-primary px-1"
          >
            +
          </button>
        </div>
      </div>

      <div className="col-span-1 md:col-span-3 text-left md:text-right font-body-lg text-body-lg font-bold text-on-surface mt-2 md:mt-0">
        {formatPrice(price * quantity)}
      </div>

      <div className="col-span-1 text-right absolute right-6 md:relative md:right-0 mt-[-80px] md:mt-0">
        <button
          onClick={() => onRemove(id)}
          className="text-outline hover:text-error transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
