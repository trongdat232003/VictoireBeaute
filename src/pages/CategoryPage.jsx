import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCategoryBySlug, getSubcategories } from '../data/categories';
import { getProductsByCategory, getProductsBySubcategory } from '../utils/productHelpers';
import ProductCard from '../components/common/ProductCard';
import Pagination from '../components/common/Pagination';

const ITEMS_PER_PAGE = 15;

const CategoryPage = ({ onAddToCart }) => {
  const { categorySlug, subcategorySlug } = useParams();
  const [selectedSubcategory, setSelectedSubcategory] = useState(subcategorySlug || 'all');
  const [currentPage, setCurrentPage] = useState(1);

  const category = getCategoryBySlug(categorySlug);
  const subcategories = getSubcategories(categorySlug);

  // Get products based on selection
  const products = selectedSubcategory === 'all'
    ? getProductsByCategory(categorySlug)
    : getProductsBySubcategory(categorySlug, selectedSubcategory);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return products.slice(start, start + ITEMS_PER_PAGE);
  }, [products, currentPage]);

  const handleSubcategoryChange = (slug) => {
    setSelectedSubcategory(slug);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-on-surface mb-4">Danh mục không tồn tại</h1>
          <Link to="/" className="text-primary hover:underline">Về trang chủ</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-16">
      {/* Hero Banner */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-surface-container-low mb-8">
        <div className="absolute inset-0 z-0">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/70 to-inverse-surface/30"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary mb-4">
            {category.name}
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-highest">
            {category.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Trang chủ</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary font-medium">{category.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Subcategories */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-surface-container-low rounded-xl p-6 sticky top-24">
              <h3 className="font-title-lg text-title-lg text-on-surface mb-4 pb-4 border-b border-outline-variant/30">
                Danh Mục Con
              </h3>
              
              <div className="space-y-2">
                {/* All option */}
                <button
                  onClick={() => handleSubcategoryChange('all')}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedSubcategory === 'all'
                      ? 'bg-primary-container text-on-primary-container font-semibold'
                      : 'text-secondary hover:bg-surface-container hover:text-primary'
                  }`}
                >
                  Tất cả
                </button>

                {/* Subcategories */}
                {subcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubcategoryChange(sub.slug)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedSubcategory === sub.slug
                        ? 'bg-primary-container text-on-primary-container font-semibold'
                        : 'text-secondary hover:bg-surface-container hover:text-primary'
                    }`}
                  >
                    {sub.name}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface">
                  {selectedSubcategory === 'all' 
                    ? 'Tất cả sản phẩm' 
                    : subcategories.find(s => s.slug === selectedSubcategory)?.name}
                </h2>
                <p className="text-secondary font-body-sm text-body-sm mt-1">
                  {products.length} sản phẩm
                  {totalPages > 1 && (
                    <span className="ml-2 text-outline">
                      — Trang {currentPage}/{totalPages}
                    </span>
                  )}
                </p>
              </div>

              {/* Sort */}
              <select className="bg-surface-container-low border border-outline-variant rounded-lg px-4 py-2 font-body-sm text-body-sm focus:outline-none focus:border-primary">
                <option>Mới nhất</option>
                <option>Giá: Thấp đến Cao</option>
                <option>Giá: Cao đến Thấp</option>
                <option>Phổ biến nhất</option>
              </select>
            </div>

            {/* Products */}
            {paginatedProducts.length > 0 ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={onAddToCart}
                    />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            ) : (
              <div className="text-center py-16">
                <span className="material-symbols-outlined text-6xl text-outline mb-4 block">
                  inventory_2
                </span>
                <h3 className="font-title-lg text-title-lg text-on-surface mb-2">
                  Chưa có sản phẩm
                </h3>
                <p className="text-secondary">
                  Danh mục này đang được cập nhật
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
