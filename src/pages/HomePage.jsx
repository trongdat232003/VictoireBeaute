import { Link } from 'react-router-dom';
import ProductCard from '../components/common/ProductCard';
import Button from '../components/common/Button';
import { products } from '../data/products';
import { categories } from '../data/categories';

const HomePage = ({ onAddToCart }) => {
  const bestSellers = products.filter(p => p.badge === 'BÁN CHẠY');
  const trendingCategories = categories.slice(0, 3); // Lấy 3 danh mục đầu tiên

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative w-full h-[819px] min-h-[600px] flex items-center justify-center overflow-hidden bg-surface-container-low mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq9yu1TchwhXBqOSWuFXGerLfowdD62zuLudkEWBJhsyAtAxa_JF8WL9lI0n7hGFX9Y8_ODQwGuUzuff73rBy-30nLpRUznw3bqhoadgD8tjLv4btptPkOI4eKyVpXW8QFc9fMkyYVoa3E7Vk17oj_Nwr3SfQVPP24IWgrRzGTr9Q1DDoe2-JsQuMZRLehNgamBW3CTBjSjUVtFZCw1V8mBfmmAhwgCPZc9UfvqqNVOHa53SD-z9u86pvJEcwEdYkSQku3xQKClA"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/80 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-20">
          <div className="max-w-lg glass-panel p-8 md:p-12 rounded-xl soft-shadow">
            <span className="font-label-caps text-label-caps text-primary tracking-widest mb-4 block uppercase">
              Khám Phá Vẻ Đẹp Rạng Ngời
            </span>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
              Đánh thức vẻ đẹp tiềm ẩn của bạn
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Bộ sưu tập tinh chất dưỡng da cao cấp mới nhất giúp phục hồi và tái tạo làn da, mang lại sự tự tin và nét thanh xuân rạng rỡ.
            </p>
            <Button size="lg">Mua Ngay</Button>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-20 mb-16">
        <div className="text-center mb-12">
          <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-2">
            Danh Mục Thịnh Hành
          </h2>
          <div className="h-1 w-16 bg-primary-container mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* First category - larger */}
          <Link
            to={`/category/${trendingCategories[0].slug}`}
            className="group relative rounded-xl overflow-hidden md:col-span-2 md:row-span-2 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={trendingCategories[0].image}
              alt={trendingCategories[0].name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="font-title-lg text-title-lg text-on-primary mb-2">{trendingCategories[0].name}</h3>
              <p className="font-body-sm text-body-sm text-surface-container-highest group-hover:text-primary-fixed-dim transition-colors">
                {trendingCategories[0].description}
              </p>
            </div>
          </Link>

          {/* Second category */}
          <Link
            to={`/category/${trendingCategories[1].slug}`}
            className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={trendingCategories[1].image}
              alt={trendingCategories[1].name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="font-title-lg text-title-lg text-on-primary mb-1">{trendingCategories[1].name}</h3>
              <p className="font-body-sm text-body-sm text-surface-container-highest">{trendingCategories[1].description}</p>
            </div>
          </Link>

          {/* Third category */}
          <Link
            to={`/category/${trendingCategories[2].slug}`}
            className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={trendingCategories[2].image}
              alt={trendingCategories[2].name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <h3 className="font-title-lg text-title-lg text-on-primary mb-1">{trendingCategories[2].name}</h3>
              <p className="font-body-sm text-body-sm text-surface-container-highest">{trendingCategories[2].description}</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="w-full mb-16 bg-surface-container-low py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-2">
                Sản Phẩm Bán Chạy
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Được yêu thích nhất bởi khách hàng của chúng tôi
              </p>
            </div>
            <Link
              to="/products"
              className="hidden md:flex items-center text-primary font-title-lg text-title-lg hover:underline transition-all"
            >
              Xem Tất Cả
              <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {bestSellers.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Beauty Tips Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-8 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-outline-variant/50 pb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="font-headline-md-mobile md:font-headline-md text-headline-md-mobile md:text-headline-md text-on-surface mb-2">
              Bí Quyết Làm Đẹp
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Cập nhật xu hướng và mẹo chăm sóc da mới nhất
            </p>
          </div>
          <button className="text-primary hover:text-primary-container font-title-lg text-title-lg font-semibold transition-colors flex items-center">
            Đọc Blog
            <span className="material-symbols-outlined ml-1">menu_book</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Post 1 */}
          <article className="flex flex-col md:flex-row gap-6 group cursor-pointer">
            <div className="w-full md:w-2/5 aspect-video md:aspect-square overflow-hidden rounded-xl bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDickUaHOhKnNWUGkok2dLLCGdua93ZtyteWvT8NbgB_OJd6dm50UjOoIainuAmI3Q-tg6393CxjdiiIVI3R9RwqYADSoGSiTW503SlTqwLSnDTNjKWyMdbMBUk2pBiPOUTkvSE71tmBs2IBIn4vKVT8aV2mspsjaE3N1GDNU0J924nZv7jexGHIHAoO_UPW1irN5vUPF14g7uU589m3iUE4KRTB3my1rxaenzpLoQjBwQg7sRGEE6Y3fp-pZ4mwzT4tY3dn1jFDA"
                alt="Skincare Routine"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center">
              <span className="text-primary font-label-caps text-label-caps mb-2 tracking-wide uppercase">
                Chăm Sóc Da
              </span>
              <h3 className="font-title-lg text-title-lg text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                5 Bước Quy Trình Dưỡng Da Ban Đêm Cho Làn Da Căng Mọng
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-3">
                Khám phá bí quyết để thức dậy với một làn da tươi trẻ, rạng rỡ bằng cách tối ưu hóa các bước chăm sóc da trước khi ngủ của bạn.
              </p>
              <span className="text-secondary font-body-sm text-body-sm text-xs">24 Tháng 10, 2023</span>
            </div>
          </article>

          {/* Post 2 */}
          <article className="flex flex-col md:flex-row gap-6 group cursor-pointer">
            <div className="w-full md:w-2/5 aspect-video md:aspect-square overflow-hidden rounded-xl bg-surface-container">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXdH_6mFBROXJYEsKT__6t1S_gaGTCxGA8DOwXDuddFlzV3ac2rPjyGJ7YHRVSKyJkridUtozZ7hXVOcZcJRZcX5ZxGZzrXE2rpqXo3TFQ2JH34e2bOSqLbmF3AKQn7g81qJSsRagmus8kWwfF2KK6Ob_cctUXEkQZjB5NE6sECLzRqPLnBvNwjxe9ksRjDhnGQ5mSafxKBtkVm_vUgdUynK7BCHNjhctiLlne5K4XiASdAwITpPLSs4zEdpFglV3hTiFi5Vd-7A"
                alt="Makeup Tips"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="w-full md:w-3/5 flex flex-col justify-center">
              <span className="text-primary font-label-caps text-label-caps mb-2 tracking-wide uppercase">
                Trang Điểm
              </span>
              <h3 className="font-title-lg text-title-lg text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                Xu Hướng Trang Điểm Tự Nhiên "Glass Skin" Thu Đông Này
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-3">
                Học cách tạo lớp nền trong veo, bóng khỏe tựa sương mai chỉ với những sản phẩm trang điểm cơ bản và kỹ thuật đơn giản.
              </p>
              <span className="text-secondary font-body-sm text-body-sm text-xs">18 Tháng 10, 2023</span>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
