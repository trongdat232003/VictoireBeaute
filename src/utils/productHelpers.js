import { products } from '../data/products';

// Helper functions for product filtering
export const getProductsByCategory = (categorySlug) => {
  // Map slug to category id
  const categoryMap = {
    'cham-soc-da-mat': 'skincare',
    'trang-diem': 'makeup',
    'nuoc-hoa': 'fragrance',
    'cham-soc-co-the': 'body-care',
    'cham-soc-toc': 'hair-care',
  };
  
  const categoryId = categoryMap[categorySlug] || categorySlug;
  return products.filter(product => product.category === categoryId);
};

export const getProductsBySubcategory = (categorySlug, subcategorySlug) => {
  // Map slug to category id
  const categoryMap = {
    'cham-soc-da-mat': 'skincare',
    'trang-diem': 'makeup',
    'nuoc-hoa': 'fragrance',
    'cham-soc-co-the': 'body-care',
    'cham-soc-toc': 'hair-care',
  };
  
  const categoryId = categoryMap[categorySlug] || categorySlug;
  return products.filter(
    product => product.category === categoryId && product.subcategory === subcategorySlug
  );
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};
