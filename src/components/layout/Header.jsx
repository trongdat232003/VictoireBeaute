import { Link } from 'react-router-dom';
import { mainNavigation } from '../../constants/navigation';

const Header = ({ cartItemCount = 0 }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-2 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link
            to="/"
            className="font-display-lg text-2xl md:text-3xl tracking-tight text-primary hover:opacity-80 transition-opacity whitespace-nowrap"
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
          <div className="flex items-center gap-4 text-primary">
            <button className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity hidden md:block">
              search
            </button>
            <button className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity">
              person
            </button>
            <Link
              to="/cart"
              className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity relative"
            >
              shopping_bag
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-container text-on-primary-container text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItemCount}
                </span>
              )}
            </Link>
            {/* Mobile Menu Button */}
            <button className="material-symbols-outlined cursor-pointer hover:opacity-80 transition-opacity md:hidden">
              menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
