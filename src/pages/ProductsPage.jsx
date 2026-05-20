import { useState } from 'react';
import ProductCard from '../components/common/ProductCard';

const ProductsPage = ({ products, onAddToCart }) => {
  const [selectedCategories, setSelectedCategories] = useState(['all']);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState([]);
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { id: 'all', label: 'Tất cả Chăm sóc da' },
    { id: 'cleanser', label: 'Sữa rửa mặt', count: 24 },
    { id: 'toner', label: 'Toner & Nước hoa hồng', count: 18 },
    { id: 'serum', label: 'Serum & Tinh chất', count: 32 },
    { id: 'moisturizer', label: 'Kem dưỡng ẩm', count: 28 },
  ];

  const skinTypes = ['Da khô', 'Da dầu', 'Nhạy cảm', 'Hỗn hợp'];

  const toggleSkinType = (type) => {
    setSelectedSkinTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  return (
    <main className="pt-8 pb-16 px-4 md:px-20 max-w-[1200px] mx-auto min-h-screen">
      {/* Breadcrumbs & Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm mb-4">
          <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary font-medium">Sản phẩm chăm sóc da</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-on-surface mb-2">
              Chăm Sóc Da Cao Cấp
            </h1>
            <p className="text-secondary font-body-lg text-body-lg">
              Khám phá bộ sưu tập dưỡng da mang lại vẻ đẹp rạng rỡ tự nhiên.
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/50 hover:border-primary transition-colors cursor-pointer w-full md:w-auto justify-between">
            <span className="font-body-sm text-body-sm text-secondary">Sắp xếp:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer appearance-none pr-6 font-medium"
            >
              <option value="newest">Mới nhất</option>
              <option value="price-asc">Giá: Thấp đến Cao</option>
              <option value="price-desc">Giá: Cao đến Thấp</option>
              <option value="popular">Phổ biến nhất</option>
              <option value="rating">Đánh giá cao</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="hidden md:block w-64 shrink-0 space-y-8 pr-4">
          {/* Category Filter */}
          <div className="border-b border-outline-variant/30 pb-6">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-4">Danh Mục</h3>
            <div className="space-y-3 font-body-sm text-body-sm text-secondary">
              {categories.map((cat) => (
                <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(cat.id)}
                    onChange={() => {
                      setSelectedCategories(prev =>
                        prev.includes(cat.id)
                          ? prev.filter(c => c !== cat.id)
                          : [...prev, cat.id]
                      );
                    }}
                    className="rounded border-outline text-primary focus:ring-primary w-4 h-4 bg-transparent cursor-pointer"
                  />
                  <span className="group-hover:text-primary transition-colors">
                    {cat.label} {cat.count && `(${cat.count})`}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Skin Type Filter */}
          <div className="border-b border-outline-variant/30 pb-6">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-4">Loại Da</h3>
            <div className="flex flex-wrap gap-2">
              {skinTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => toggleSkinType(type)}
                  className={`px-4 py-2 rounded-full border font-body-sm text-body-sm transition-colors ${
                    selectedSkinTypes.includes(type)
                      ? 'border-primary bg-primary-fixed-dim/20 text-primary font-medium'
                      : 'border-outline-variant/50 bg-surface-container-lowest text-secondary hover:border-primary hover:text-primary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Active Filters */}
          {selectedSkinTypes.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedSkinTypes.map((type) => (
                <span
                  key={type}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-surface-container border border-outline-variant/30 rounded-full font-body-sm text-body-sm text-on-surface-variant"
                >
                  {type}
                  <span
                    onClick={() => toggleSkinType(type)}
                    className="material-symbols-outlined text-sm cursor-pointer hover:text-primary"
                  >
                    close
                  </span>
                </span>
              ))}
              <button
                onClick={() => setSelectedSkinTypes([])}
                className="text-primary font-body-sm text-body-sm underline hover:opacity-80 transition-opacity ml-2"
              >
                Xóa tất cả
              </button>
            </div>
          )}

          {/* Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
