// Utility functions for formatting
export const formatPrice = (price) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price).replace('₫', '₫');
};

export const formatNumber = (num) => {
  return new Intl.NumberFormat('vi-VN').format(num);
};
