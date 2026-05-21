import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatters';

const ProductCard = ({ product, onAddToCart }) => {
  const { id, name, description, price, image, badge, rating, reviewCount } = product;

  return (
    <div className="group bg-surface rounded-xl p-4 shadow-sm hover:-translate-y-1 transition-transform duration-300 relative flex flex-col h-full">
      {badge && (
        <div className="absolute top-4 left-4 z-10 bg-primary-fixed-dim text-on-primary-fixed px-3 py-1 rounded-full font-label-caps text-label-caps uppercase">
          {badge}
        </div>
      )}
      
      <button className="absolute top-4 right-4 z-10 text-outline hover:text-primary transition-colors">
        <span className="material-symbols-outlined">favorite</span>
      </button>

      <Link to={`/product/${id}`}>
        <div className="aspect-square w-full overflow-hidden rounded-lg mb-4 bg-surface-container">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>

      <div className="text-center flex-1 flex flex-col">
        {rating && (
          <div className="flex items-center justify-center gap-1 mb-1 text-primary">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="material-symbols-outlined text-sm">
                {i < Math.floor(rating) ? 'star' : i < rating ? 'star_half' : 'star'}
              </span>
            ))}
            {reviewCount && (
              <span className="text-secondary font-body-sm text-xs ml-1">({reviewCount})</span>
            )}
          </div>
        )}
        
        <Link to={`/product/${id}`}>
          <h3 className="font-title-lg text-title-lg text-on-surface mb-1 line-clamp-2 hover:text-primary min-h-[3rem]">
            {name}
          </h3>
        </Link>
        
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-3 line-clamp-2 min-h-[2.5rem]">{description}</p>
        <p className="font-body-lg text-body-lg font-bold text-primary mt-auto">{formatPrice(price)}</p>
      </div>

      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-primary text-on-primary py-2 rounded-lg font-body-sm text-body-sm hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
        >
          Thêm vào giỏ
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
