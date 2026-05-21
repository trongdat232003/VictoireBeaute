import { Link } from 'react-router-dom';
import { categories } from '../data/categories';

const AllCategoriesPage = () => {
  return (
    <div className="min-h-screen pb-16">
      {/* Header */}
      <section className="bg-surface-container-low py-16 mb-12">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 text-center">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
            Danh Mục Sản Phẩm
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto">
            Khám phá bộ sưu tập đa dạng các sản phẩm làm đẹp cao cấp
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-[400px]"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-6">
                <h2 className="font-headline-md text-headline-md text-on-primary mb-2 group-hover:text-primary-fixed-dim transition-colors">
                  {category.name}
                </h2>
                <p className="font-body-sm text-body-sm text-surface-container-highest mb-4">
                  {category.description}
                </p>
                
                {/* Subcategories count */}
                <div className="flex items-center gap-2 text-surface-container-highest">
                  <span className="material-symbols-outlined text-sm">category</span>
                  <span className="font-body-sm text-body-sm">
                    {category.subcategories.length} danh mục con
                  </span>
                </div>

                {/* Arrow icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface-container-lowest/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-container group-hover:scale-110 transition-all">
                  <span className="material-symbols-outlined text-on-primary group-hover:text-on-primary-container">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesPage;
