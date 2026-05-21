import { useState, useMemo } from 'react';
import ProductCard from '../components/common/ProductCard';
import Pagination from '../components/common/Pagination';
import { products } from '../data/products';
import { categories } from '../data/categories';

const ITEMS_PER_PAGE = 15;

const ProductsPage = ({ onAddToCart }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState('newest');
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Toggle category expansion
  const toggleExpand = (categoryId) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Toggle category or subcategory selection
  const toggleCategory = (categoryId, subcategoryId = null) => {
    if (subcategoryId) {
      // Clicking subcategory - only select this subcategory, unselect parent
      const filterKey = `${categoryId}-${subcategoryId}`;
      setSelectedCategories(prev => {
        // Remove parent category if exists
        const withoutParent = prev.filter(c => c !== categoryId);
        // Toggle subcategory
        return withoutParent.includes(filterKey)
          ? withoutParent.filter(c => c !== filterKey)
          : [...withoutParent, filterKey];
      });
      setCurrentPage(1);
    } else {
      // Clicking parent category - toggle parent and all subcategories
      const category = categories.find(cat => cat.id === categoryId);
      if (!category) return;
      
      const allSubcategoryKeys = category.subcategories.map(sub => `${categoryId}-${sub.slug}`);
      
      setSelectedCategories(prev => {
        const hasParent = prev.includes(categoryId);
        
        if (hasParent) {
          // Unselect parent and all subcategories
          return prev.filter(c => c !== categoryId && !allSubcategoryKeys.includes(c));
        } else {
          // Select parent and all subcategories
          const withoutThisCategory = prev.filter(c => c !== categoryId && !allSubcategoryKeys.includes(c));
          return [...withoutThisCategory, categoryId, ...allSubcategoryKeys];
        }
      });
      setCurrentPage(1);
    }
  };

  // Filter products based on selected categories
  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) {
      return products;
    }

    return products.filter(product => {
      return selectedCategories.some(filter => {
        if (filter.includes('-')) {
          // Subcategory filter - split only at first dash
          const firstDashIndex = filter.indexOf('-');
          const catId = filter.substring(0, firstDashIndex);
          const subId = filter.substring(firstDashIndex + 1);
          return product.category === catId && product.subcategory === subId;
        } else {
          // Parent category filter
          return product.category === filter;
        }
      });
    });
  }, [selectedCategories]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const sorted = [...filteredProducts];
    
    switch (sortBy) {
      case 'price-asc':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return sorted.sort((a, b) => b.price - a.price);
      case 'popular':
        return sorted.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'newest':
      default:
        return sorted;
    }
  }, [filteredProducts, sortBy]);

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedProducts, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-8 pb-16 px-4 md:px-20 max-w-[1400px] mx-auto min-h-screen">
      {/* Breadcrumbs & Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-secondary font-body-sm text-body-sm mb-4">
          <a href="/" className="hover:text-primary transition-colors">Trang chủ</a>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-primary font-medium">Tất cả sản phẩm</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="font-headline-md-mobile text-headline-md-mobile md:font-headline-md md:text-headline-md text-on-surface mb-2">
              Tất Cả Sản Phẩm
            </h1>
            <p className="text-secondary font-body-lg text-body-lg">
              Khám phá bộ sưu tập làm đẹp cao cấp của chúng tôi
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-3 bg-surface-container-low px-4 py-3 rounded-lg border border-outline-variant/50 hover:border-primary transition-colors w-full md:w-auto justify-between">
            <span className="font-body-sm text-body-sm text-secondary">Sắp xếp:</span>
            <select
              value={sortBy}
              onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }}
              className="bg-transparent font-body-sm text-body-sm text-on-surface focus:outline-none cursor-pointer font-medium"
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
        <aside className="md:w-80 shrink-0 space-y-6">
          {/* Category Filter */}
          <div className="bg-surface-container-low rounded-xl p-6">
            <h3 className="font-title-lg text-title-lg text-on-surface mb-4 pb-4 border-b border-outline-variant/30">
              Danh Mục
            </h3>
            <div className="space-y-3 font-body-sm text-body-sm">
              {categories.map((category) => (
                <div key={category.id} className="space-y-2">
                  {/* Parent Category - Collapsible */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-3 cursor-pointer group flex-1">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => toggleCategory(category.id)}
                        className="rounded border-outline text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                      />
                      <span className="group-hover:text-primary transition-colors font-semibold text-on-surface">
                        {category.name}
                      </span>
                    </label>
                    
                    {/* Expand/Collapse Button */}
                    <button
                      onClick={() => toggleExpand(category.id)}
                      className="p-1 hover:bg-surface-container rounded transition-colors"
                    >
                      <span className="material-symbols-outlined text-sm text-secondary">
                        {expandedCategories.includes(category.id) ? 'expand_less' : 'expand_more'}
                      </span>
                    </button>
                  </div>

                  {/* Subcategories - Collapsible */}
                  {expandedCategories.includes(category.id) && (
                    <div className="ml-7 space-y-2 animate-fadeIn">
                      {category.subcategories.map((sub) => (
                        <label key={sub.id} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(`${category.id}-${sub.slug}`)}
                            onChange={() => toggleCategory(category.id, sub.slug)}
                            className="rounded border-outline text-primary focus:ring-primary w-3.5 h-3.5 cursor-pointer"
                          />
                          <span className="group-hover:text-primary transition-colors text-secondary">
                            {sub.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          {/* Active Filters */}
          {selectedCategories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategories.map((filter) => {
                let label = '';
                if (filter.includes('-')) {
                  const [catId, subSlug] = filter.split('-');
                  const cat = categories.find(c => c.id === catId);
                  const sub = cat?.subcategories.find(s => s.slug === subSlug);
                  label = sub?.name || filter;
                } else {
                  const cat = categories.find(c => c.id === filter);
                  label = cat?.name || filter;
                }

                return (
                  <span
                    key={filter}
                    className="inline-flex items-center gap-1 px-3 py-1 bg-primary-container text-on-primary-container rounded-full font-body-sm text-body-sm"
                  >
                    {label}
                    <span
                      onClick={() => {
                        if (filter.includes('-')) {
                          const [catId, subSlug] = filter.split('-');
                          toggleCategory(catId, subSlug);
                        } else {
                          toggleCategory(filter);
                        }
                      }}
                      className="material-symbols-outlined text-sm cursor-pointer hover:text-error"
                    >
                      close
                    </span>
                  </span>
                );
              })}
              <button
                onClick={() => setSelectedCategories([])}
                className="text-primary font-body-sm text-body-sm underline hover:opacity-80 transition-opacity ml-2"
              >
                Xóa tất cả
              </button>
            </div>
          )}

          {/* Results count */}
          <div className="mb-6">
            <p className="text-secondary font-body-sm text-body-sm">
              Hiển thị {sortedProducts.length} sản phẩm
              {totalPages > 1 && (
                <span className="ml-2 text-outline">
                  — Trang {currentPage}/{totalPages}
                </span>
              )}
            </p>
          </div>

          {/* Grid */}
          {paginatedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
                Không tìm thấy sản phẩm
              </h3>
              <p className="text-secondary">
                Thử thay đổi bộ lọc để xem thêm sản phẩm
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
