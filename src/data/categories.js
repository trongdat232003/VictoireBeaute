// Danh mục cha và danh mục con
export const categories = [
  {
    id: 'skincare',
    name: 'Chăm Sóc Da Mặt',
    slug: 'cham-soc-da-mat',
    description: 'Sản phẩm chăm sóc da mặt cao cấp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4hVrfZoIz_gCZeCub2CuR23MoTB3UrrVKgXgAU453mAtuT0KyzrC6-S2ssw9ynIknDLzUF48qWvCJEAZn5-WHZgZEDBQtT5IFBRsp-qsMSj0XPs8nv4rKVEq94Zc6On6mzUeoAp2iyb0i8DReV_AQ0DjGB8K9hNoLajJd34ZHFhwPW8sKifB4kzJ4nhjj1cXZehPpIEizAbUff_aR6IGVOVbKngEhqdh2XV5VAWnDylHPK5M-LSvAjRcWLC90UoXmqXLDc6vRFg',
    subcategories: [
      { id: 'tay-trang', name: 'Tẩy Trang', slug: 'tay-trang' },
      { id: 'sua-rua-mat', name: 'Sữa Rửa Mặt', slug: 'sua-rua-mat' },
      { id: 'tay-te-bao-chet', name: 'Tẩy Tế Bào Chết', slug: 'tay-te-bao-chet' },
      { id: 'toner', name: 'Toner', slug: 'toner' },
      { id: 'mat-na', name: 'Mặt Nạ', slug: 'mat-na' },
      { id: 'serum', name: 'Serum', slug: 'serum' },
      { id: 'ho-tro-tri-mun', name: 'Hỗ Trợ Trị Mụn', slug: 'ho-tro-tri-mun' },
      { id: 'treatment', name: 'Treatment', slug: 'treatment' },
      { id: 'duong-am', name: 'Dưỡng Ẩm', slug: 'duong-am' },
      { id: 'kem-chong-nang', name: 'Kem Chống Nắng', slug: 'kem-chong-nang' },
      { id: 'xit-khoang', name: 'Xịt Khoáng', slug: 'xit-khoang' },
      { id: 'bo-cham-soc', name: 'Bộ Chăm Sóc Da Mặt', slug: 'bo-cham-soc' },
      { id: 'dung-cu', name: 'Dụng Cụ Chăm Sóc Da Mặt', slug: 'dung-cu' },
      { id: 'duong-mat-mi-moi', name: 'Dưỡng Mắt, Mi, Môi', slug: 'duong-mat-mi-moi' },
    ],
  },
  {
    id: 'makeup',
    name: 'Trang Điểm',
    slug: 'trang-diem',
    description: 'Mỹ phẩm trang điểm chuyên nghiệp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoGWsS5pwkNE01hXFSb7c3tZ77prJG1lUucQsOmSwkmheJFFNV48RUWzvg3Q_0XZValUmi_JyJ-RqNODiUDhcJ5xEIO2QYvxI00kW-jahvdqQjJftAyKLj4p_JG-1KPoLkw1IOAt_EeQRaJ4MJ-LUQBdY51ATP6FWaiE1nuABcfquNsEeGnMF-kU-_psXVrXjPhLNqJpdR_4MdnzNrmIEXYmN-CH-jxDVr3ZcIcFcKuwEiFUbKs-5l3wCloDtc4f8zJdL3DaQ40g',
    subcategories: [
      { id: 'kem-lot', name: 'Kem Lót', slug: 'kem-lot' },
      { id: 'pha-nen', name: 'Phấn Nền', slug: 'pha-nen' },
      { id: 'phan-nuoc-cushion', name: 'Phấn Nước / Cushion', slug: 'phan-nuoc-cushion' },
      { id: 'kem-nen', name: 'Kem Nền', slug: 'kem-nen' },
      { id: 'che-khuyet-diem', name: 'Che Khuyết Điểm', slug: 'che-khuyet-diem' },
      { id: 'tao-khoi-bat-sang', name: 'Tạo Khối / Bắt Sáng', slug: 'tao-khoi-bat-sang' },
      { id: 'phan-phu', name: 'Phấn Phủ', slug: 'phan-phu' },
      { id: 'ke-may', name: 'Kẻ Mày', slug: 'ke-may' },
      { id: 'ke-mat', name: 'Kẻ Mắt', slug: 'ke-mat' },
      { id: 'phan-mat', name: 'Phấn Mắt', slug: 'phan-mat' },
      { id: 'nho-mat', name: 'Nhũ Mắt', slug: 'nho-mat' },
      { id: 'mascara', name: 'Mascara', slug: 'mascara' },
      { id: 'ma-hong', name: 'Má Hồng', slug: 'ma-hong' },
      { id: 'son-duong', name: 'Son Dưỡng / Son Bóng', slug: 'son-duong' },
      { id: 'son-mau', name: 'Son Màu', slug: 'son-mau' },
      { id: 'xit-khoa-makeup', name: 'Xịt Khoá Makeup', slug: 'xit-khoa-makeup' },
    ],
  },
  {
    id: 'fragrance',
    name: 'Nước Hoa',
    slug: 'nuoc-hoa',
    description: 'Nước hoa cao cấp',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDR-OlFCVbLeNne4UhEABYyd28JgRn34JeL9X4lrwc1u4Ch7viHzaCbTI3X1_KD8EM2BA3KkMY61VRj78QQBTMC1Nis2d6az2QDsnd5eHkyr11Xbsku8ROf4u_-ZpYikhDCMe-fm5OZ_dsBkuqRYlZ5vq8f_ZIs0qvlLVb2MRL7qUUw_PM8vYO3QpxPExDaMZCCheXYk4N_R8HsXAdZuFbWsnVP7V3RGwGvBOEujH9EugU68SvLFg3IQeyvu-fREiOR8Zjs9PpIHA',
    subcategories: [
      { id: 'nuoc-hoa', name: 'Nước Hoa', slug: 'nuoc-hoa' },
      { id: 'set-nuoc-hoa', name: 'Set Nước Hoa', slug: 'set-nuoc-hoa' },
      { id: 'nuoc-hoa-vung-kin', name: 'Nước Hoa Vùng Kín', slug: 'nuoc-hoa-vung-kin' },
      { id: 'xit-tham-toan-than', name: 'Xịt Thơm Toàn Thân', slug: 'xit-tham-toan-than' },
    ],
  },
  {
    id: 'body-care',
    name: 'Chăm Sóc Cơ Thể',
    slug: 'cham-soc-co-the',
    description: 'Sản phẩm chăm sóc toàn thân',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDickUaHOhKnNWUGkok2dLLCGdua93ZtyteWvT8NbgB_OJd6dm50UjOoIainuAmI3Q-tg6393CxjdiiIVI3R9RwqYADSoGSiTW503SlTqwLSnDTNjKWyMdbMBUk2pBiPOUTkvSE71tmBs2IBIn4vKVT8aV2mspsjaE3N1GDNU0J924nZv7jexGHIHAoO_UPW1irN5vUPF14g7uU589m3iUE4KRTB3my1rxaenzpLoQjBwQg7sRGEE6Y3fp-pZ4mwzT4tY3dn1jFDA',
    subcategories: [
      { id: 'sua-tam', name: 'Sữa Tắm', slug: 'sua-tam' },
      { id: 'tay-te-bao-chet-body', name: 'Tẩy Tế Bào Chết Body', slug: 'tay-te-bao-chet-body' },
      { id: 'duong-the', name: 'Dưỡng Thể', slug: 'duong-the' },
      { id: 'tri-mun-lung', name: 'Trị Mụn Lưng', slug: 'tri-mun-lung' },
      { id: 'duong-trang-body', name: 'Dưỡng Trắng Body', slug: 'duong-trang-body' },
    ],
  },
  {
    id: 'hair-care',
    name: 'Chăm Sóc Tóc',
    slug: 'cham-soc-toc',
    description: 'Sản phẩm chăm sóc tóc chuyên sâu',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkadRRtAoxMYLxlNUgAoRpxSEbehmzEAUpiD6djFGkFpfPg130rgh4Jo9mYyhNg7n6Up_tnA1GhuvTIOMMQThgb0AdjOey0XrZbjUa7Ax0WYpQUR9Od95ACMFpthUh-jj38v_MsEkZNawnTQZKY6lP0-83apxX0QqQgEfjgIGLU6zPnxQF8WdSHJoCdXdk6MYgV9sUnIJqmRBXfTBLsfAMAciaxKZsW_fkh1lfp83M_MSJXPVBQSTZ4-z7p8XmWKdcC8y22m-OhA',
    subcategories: [
      { id: 'dau-goi', name: 'Dầu Gội', slug: 'dau-goi' },
      { id: 'dau-xa', name: 'Dầu Xả', slug: 'dau-xa' },
      { id: 'duong-toc', name: 'Dưỡng Tóc', slug: 'duong-toc' },
      { id: 'tao-kieu-toc', name: 'Tạo Kiểu Tóc', slug: 'tao-kieu-toc' },
    ],
  },
];

// Helper function để tìm category theo slug
export const getCategoryBySlug = (slug) => {
  return categories.find(cat => cat.slug === slug);
};

// Helper function để tìm subcategory
export const getSubcategoryBySlug = (categorySlug, subcategorySlug) => {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;
  return category.subcategories.find(sub => sub.slug === subcategorySlug);
};

// Helper function để lấy tất cả subcategories của một category
export const getSubcategories = (categorySlug) => {
  const category = getCategoryBySlug(categorySlug);
  return category ? category.subcategories : [];
};
