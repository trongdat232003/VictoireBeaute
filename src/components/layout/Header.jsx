import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mainNavigation } from '../../constants/navigation';

const Header = ({ cartItemCount = 0 }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close menu when clicking outside or on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity md:hidden text-primary text-2xl"
              aria-label="Open menu"
            >
              menu
            </button>

            {/* Center: Brand Logo */}
            <Link
              to="/"
              className="font-display-lg text-xl md:text-3xl tracking-tight text-primary hover:opacity-80 transition-opacity whitespace-nowrap absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none"
            >
              Victoire Beauté
            </Link>

            {/* Center: Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 font-body-lg text-body-lg absolute left-1/2 transform -translate-x-1/2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-secondary hover:text-primary transition-colors cursor-pointer active:scale-95 whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right: Icons */}
            <div className="flex items-center gap-3 md:gap-4 text-primary">
              <button className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity hidden md:block text-2xl">
                search
              </button>
              <button className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity hidden md:block text-2xl">
                person
              </button>
              <Link
                to="/cart"
                className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity relative text-2xl"
              >
                shopping_bag
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-surface z-[70] shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-outline-variant">
          <h2 className="font-display-sm text-display-sm text-primary">Menu</h2>
          <button
            onClick={closeMobileMenu}
            className="material-symbols-outlined text-on-surface hover:text-primary transition-colors text-2xl"
            aria-label="Close menu"
          >
            close
          </button>
        </div>

        {/* Menu Content */}
        <nav className="flex flex-col p-4">
          {/* Main Navigation */}
          <div className="space-y-1 mb-6">
            {mainNavigation.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface hover:bg-surface-container hover:text-primary transition-all font-body-lg text-body-lg active:scale-95"
              >
                <span className="material-symbols-outlined text-xl">
                  {item.icon || 'arrow_forward'}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-outline-variant my-4" />

          {/* Additional Links */}
          <div className="space-y-1">
            <Link
              to="/account"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface hover:bg-surface-container hover:text-primary transition-all font-body-md text-body-md"
            >
              <span className="material-symbols-outlined text-xl">person</span>
              Tài khoản
            </Link>
            <button
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface hover:bg-surface-container hover:text-primary transition-all font-body-md text-body-md w-full text-left"
            >
              <span className="material-symbols-outlined text-xl">search</span>
              Tìm kiếm
            </button>
            <Link
              to="/wishlist"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface hover:bg-surface-container hover:text-primary transition-all font-body-md text-body-md"
            >
              <span className="material-symbols-outlined text-xl">favorite</span>
              Yêu thích
            </Link>
          </div>

          {/* Divider */}
          <div className="border-t border-outline-variant my-4" />

          {/* Info Links */}
          <div className="space-y-1">
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all font-body-sm text-body-sm"
            >
              Về chúng tôi
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all font-body-sm text-body-sm"
            >
              Liên hệ
            </Link>
            <Link
              to="/shipping"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all font-body-sm text-body-sm"
            >
              Chính sách vận chuyển
            </Link>
          </div>
        </nav>

        {/* Menu Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-outline-variant bg-surface-container">
          <p className="font-body-sm text-body-sm text-on-surface-variant text-center">
            Victoire Beauté
          </p>
          <p className="font-body-xs text-xs text-on-surface-variant text-center mt-1">
            Vẻ đẹp là chiến thắng
          </p>
        </div>
      </aside>
    </>
  );
};

export default Header;
