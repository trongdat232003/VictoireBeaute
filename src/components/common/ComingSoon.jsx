import logo from '../../assets/logo/logo.jpg';

const ComingSoon = ({ pageName = 'Trang này' }) => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={logo} 
            alt="Victoire Beauté Logo" 
            className="w-32 h-32 object-contain rounded-2xl shadow-lg"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-4">
          Victoire Beauté
        </h1>

        {/* Coming Soon Message */}
        <div className="glass-panel rounded-xl p-8 mb-6">
          <span className="material-symbols-outlined text-6xl text-primary mb-4 block">
            construction
          </span>
          <h2 className="font-headline-md-mobile text-headline-md-mobile text-on-surface mb-3">
            {pageName}
          </h2>
          <p className="font-body-lg text-body-lg text-secondary mb-4">
            Trang đang được phát triển
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Chúng tôi đang nỗ lực hoàn thiện tính năng này để mang đến trải nghiệm tốt nhất cho bạn.
          </p>
        </div>

        {/* Back to Home Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-bold rounded-full py-3 px-6 hover:opacity-90 transition-opacity"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          Về Trang Chủ
        </a>
      </div>
    </div>
  );
};

export default ComingSoon;
