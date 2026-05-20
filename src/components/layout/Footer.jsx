import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full mt-16 bg-surface-container-low border-t border-outline-variant/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-[1200px] mx-auto px-4 md:px-8 py-16">
        {/* Brand & Social */}
        <div className="col-span-1 mb-8 md:mb-0">
          <span className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface block mb-6">
            Victoire Beauté
          </span>
          <p className="font-body-sm text-body-sm text-secondary mb-4">
            Nâng tầm vẻ đẹp Việt với những sản phẩm mỹ phẩm cao cấp, chất lượng hàng đầu.
          </p>
          <div className="flex space-x-4">
            {/* Social Icons */}
            <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary hover:bg-primary-fixed-dim transition-all cursor-pointer">
              <span className="material-symbols-outlined text-sm filled-icon">camera_alt</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-outline hover:text-primary hover:bg-primary-fixed-dim transition-all cursor-pointer">
              <span className="material-symbols-outlined text-sm filled-icon">thumb_up</span>
            </button>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-title-lg text-title-lg text-on-surface font-bold mb-4">Cửa Hàng</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/new-arrivals" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                Sản phẩm mới
              </Link>
            </li>
            <li>
              <Link to="/products" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                Bán chạy nhất
              </Link>
            </li>
            <li>
              <Link to="/gift-sets" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                Bộ quà tặng
              </Link>
            </li>
            <li>
              <Link to="/promotions" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                Khuyến mãi
              </Link>
            </li>
          </ul>
        </div>

        {/* Info Links */}
        <div>
          <h4 className="font-title-lg text-title-lg text-on-surface font-bold mb-4">Liên Kết</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/about" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/shipping" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/sustainability" className="font-body-sm text-body-sm text-secondary hover:text-primary hover:underline transition-all cursor-pointer">
                Sustainability
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-title-lg text-title-lg text-on-surface font-bold mb-4">Đăng Ký Nhận Tin</h4>
          <p className="font-body-sm text-body-sm text-secondary mb-4">
            Nhận thông tin ưu đãi và mẹo làm đẹp mới nhất.
          </p>
          <form className="flex flex-col space-y-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Địa chỉ email của bạn"
              className="w-full bg-surface border border-outline-variant rounded-md px-4 py-2 font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
            />
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-2 rounded-md font-title-lg text-title-lg hover:bg-primary-container hover:text-on-primary-container transition-colors shadow-sm"
            >
              Đăng Ký
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-outline-variant/30 py-6 text-center">
        <p className="font-body-sm text-body-sm text-secondary">
          © 2026 Victoire Beauté. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
