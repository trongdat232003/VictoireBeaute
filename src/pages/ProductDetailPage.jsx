import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { products } from '../data/products';
import { formatPrice } from '../utils/formatters';
import ProductCard from '../components/common/ProductCard';
import Button from '../components/common/Button';

const ProductDetailPage = ({ onAddToCart }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Tìm sản phẩm theo ID
  const product = products.find(p => p.id === parseInt(productId));

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-display-lg text-display-lg text-on-surface mb-4">
          Không tìm thấy sản phẩm
        </h1>
        <Button onClick={() => navigate('/products')}>
          Quay lại trang sản phẩm
        </Button>
      </div>
    );
  }

  // Lấy sản phẩm liên quan (cùng subcategory)
  const relatedProducts = products
    .filter(p => p.subcategory === product.subcategory && p.id !== product.id)
    .slice(0, 4);

  // Xử lý thêm vào giỏ hàng
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    // Có thể thêm notification ở đây
  };

  // Giả lập nhiều hình ảnh (trong thực tế sẽ có nhiều ảnh từ data)
  const productImages = [
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-surface-container py-3 md:py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-body-sm font-body-sm text-on-surface-variant overflow-x-auto whitespace-nowrap">
            <Link to="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary transition-colors">
              Sản phẩm
            </Link>
            <span>/</span>
            <span className="text-on-surface truncate max-w-[150px] md:max-w-none">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="container mx-auto px-4 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          {/* Product Images */}
          <div className="space-y-3 md:space-y-4">
            {/* Main Image */}
            <div className="aspect-square w-full overflow-hidden rounded-xl md:rounded-2xl bg-surface-container shadow-lg">
              <img
                src={productImages[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {productImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden rounded-lg transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-primary shadow-md'
                      : 'ring-1 ring-outline-variant hover:ring-primary'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 md:space-y-6">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block bg-primary-fixed-dim text-on-primary-fixed px-3 md:px-4 py-1.5 md:py-2 rounded-full font-label-caps text-label-caps uppercase text-xs md:text-sm">
                {product.badge}
              </div>
            )}

            {/* Product Name */}
            <h1 className="font-display-md md:font-display-lg text-display-md md:text-display-lg text-on-surface">
              {product.name}
            </h1>

            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-base md:text-xl">
                      {i < Math.floor(product.rating)
                        ? 'star'
                        : i < product.rating
                        ? 'star_half'
                        : 'star'}
                    </span>
                  ))}
                </div>
                <span className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface">
                  {product.rating}
                </span>
                {product.reviewCount && (
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    ({product.reviewCount} đánh giá)
                  </span>
                )}
              </div>
            )}

            {/* Price */}
            <div className="py-3 md:py-4 border-y border-outline-variant">
              <p className="font-display-sm md:font-display-sm text-display-sm md:text-display-sm text-primary font-bold">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="font-title-md md:font-title-lg text-title-md md:text-title-lg text-on-surface">
                Mô tả sản phẩm
              </h3>
              <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2 md:space-y-3">
              <label className="font-title-sm md:font-title-md text-title-sm md:text-title-md text-on-surface block">
                Số lượng
              </label>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex items-center border border-outline rounded-lg overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 md:px-4 py-2 md:py-3 hover:bg-surface-container transition-colors active:scale-95"
                  >
                    <span className="material-symbols-outlined text-xl">remove</span>
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 md:w-16 text-center font-body-md md:font-body-lg text-body-md md:text-body-lg border-x border-outline py-2 md:py-3 focus:outline-none"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 md:px-4 py-2 md:py-3 hover:bg-surface-container transition-colors active:scale-95"
                  >
                    <span className="material-symbols-outlined text-xl">add</span>
                  </button>
                </div>
                <span className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant">
                  Còn hàng
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 md:gap-4 pt-2 md:pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-on-primary py-3 md:py-4 px-4 md:px-6 rounded-lg font-title-sm md:font-title-md text-title-sm md:text-title-md hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-md hover:shadow-lg active:scale-95"
              >
                Thêm vào giỏ
              </button>
              <button className="p-3 md:p-4 border border-outline rounded-lg hover:bg-surface-container transition-colors active:scale-95">
                <span className="material-symbols-outlined text-xl md:text-2xl">favorite</span>
              </button>
            </div>

            {/* Product Features */}
            <div className="bg-surface-container rounded-xl p-4 md:p-6 space-y-3 md:space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">local_shipping</span>
                <div>
                  <h4 className="font-title-sm text-title-sm text-on-surface">
                    Miễn phí vận chuyển
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Cho đơn hàng từ 500.000đ
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">verified</span>
                <div>
                  <h4 className="font-title-sm text-title-sm text-on-surface">
                    Chính hãng 100%
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Cam kết sản phẩm chính hãng
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl md:text-2xl">autorenew</span>
                <div>
                  <h4 className="font-title-sm text-title-sm text-on-surface">
                    Đổi trả dễ dàng
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Trong vòng 30 ngày
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-12 md:mb-16">
          <div className="bg-surface rounded-xl md:rounded-2xl shadow-sm p-4 md:p-8">
            <div className="space-y-6 md:space-y-8">
              {/* Chi tiết sản phẩm */}
              <div>
                <h2 className="font-display-sm text-display-sm text-on-surface mb-3 md:mb-4">
                  Chi tiết sản phẩm
                </h2>
                <div className="prose prose-base md:prose-lg max-w-none text-on-surface-variant">
                  <p className="font-body-md md:font-body-lg text-body-md md:text-body-lg leading-relaxed">
                    {product.name} là một sản phẩm cao cấp được thiết kế đặc biệt để mang lại 
                    trải nghiệm chăm sóc da tuyệt vời. Với công thức độc quyền và thành phần 
                    thiên nhiên, sản phẩm giúp nuôi dưỡng làn da của bạn một cách toàn diện.
                  </p>
                  <h3 className="font-title-md md:font-title-lg text-title-md md:text-title-lg text-on-surface mt-4 md:mt-6 mb-2 md:mb-3">
                    Thành phần chính
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 font-body-sm md:font-body-md text-body-sm md:text-body-md">
                    <li>Chiết xuất thiên nhiên cao cấp</li>
                    <li>Vitamin và khoáng chất thiết yếu</li>
                    <li>Công nghệ dưỡng ẩm tiên tiến</li>
                    <li>Không chứa paraben và hóa chất độc hại</li>
                  </ul>
                  <h3 className="font-title-md md:font-title-lg text-title-md md:text-title-lg text-on-surface mt-4 md:mt-6 mb-2 md:mb-3">
                    Công dụng
                  </h3>
                  <ul className="space-y-1.5 md:space-y-2 font-body-sm md:font-body-md text-body-sm md:text-body-md">
                    <li>Cấp ẩm sâu cho làn da</li>
                    <li>Cải thiện kết cấu da</li>
                    <li>Làm sáng và đều màu da</li>
                    <li>Chống lão hóa hiệu quả</li>
                  </ul>
                  <h3 className="font-title-md md:font-title-lg text-title-md md:text-title-lg text-on-surface mt-4 md:mt-6 mb-2 md:mb-3">
                    Hướng dẫn sử dụng
                  </h3>
                  <ol className="space-y-1.5 md:space-y-2 font-body-sm md:font-body-md text-body-sm md:text-body-md">
                    <li>Làm sạch da mặt</li>
                    <li>Lấy một lượng sản phẩm vừa đủ</li>
                    <li>Thoa đều lên mặt và cổ</li>
                    <li>Massage nhẹ nhàng để sản phẩm thấm sâu</li>
                    <li>Sử dụng 2 lần mỗi ngày để đạt hiệu quả tốt nhất</li>
                  </ol>
                </div>
              </div>

              {/* Đánh giá */}
              <div className="border-t border-outline-variant pt-6 md:pt-8">
                <h2 className="font-display-sm text-display-sm text-on-surface mb-4 md:mb-6">
                  Đánh giá từ khách hàng
                </h2>
                <div className="space-y-4 md:space-y-6">
                  {/* Sample Review 1 */}
                  <div className="bg-surface-container rounded-xl p-4 md:p-6">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div>
                        <h4 className="font-title-sm md:font-title-md text-title-sm md:text-title-md text-on-surface">
                          Nguyễn Thị Mai
                        </h4>
                        <div className="flex items-center gap-1 text-primary mt-1">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-xs md:text-sm">
                              star
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="font-body-xs md:font-body-sm text-body-xs md:text-body-sm text-on-surface-variant">
                        2 tuần trước
                      </span>
                    </div>
                    <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant">
                      Sản phẩm rất tuyệt vời! Da tôi đã cải thiện rõ rệt sau 1 tuần sử dụng. 
                      Kết cấu mịn màng, thấm nhanh và không gây nhờn rít. Rất đáng để thử!
                    </p>
                  </div>

                  {/* Sample Review 2 */}
                  <div className="bg-surface-container rounded-xl p-4 md:p-6">
                    <div className="flex items-start justify-between mb-2 md:mb-3">
                      <div>
                        <h4 className="font-title-sm md:font-title-md text-title-sm md:text-title-md text-on-surface">
                          Trần Văn Hùng
                        </h4>
                        <div className="flex items-center gap-1 text-primary mt-1">
                          {[...Array(4)].map((_, i) => (
                            <span key={i} className="material-symbols-outlined text-xs md:text-sm">
                              star
                            </span>
                          ))}
                          <span className="material-symbols-outlined text-xs md:text-sm">star</span>
                        </div>
                      </div>
                      <span className="font-body-xs md:font-body-sm text-body-xs md:text-body-sm text-on-surface-variant">
                        1 tháng trước
                      </span>
                    </div>
                    <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-on-surface-variant">
                      Chất lượng tốt, đóng gói cẩn thận. Mùi hương dễ chịu. Giá hơi cao nhưng 
                      xứng đáng với chất lượng. Sẽ tiếp tục ủng hộ!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="font-display-sm text-display-sm text-on-surface mb-6 md:mb-8 text-center">
              Sản phẩm liên quan
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
