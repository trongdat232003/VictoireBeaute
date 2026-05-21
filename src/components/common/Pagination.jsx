const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        pages.push(i);
      }
    }

    // Insert ellipsis
    const withEllipsis = [];
    let prev = null;
    for (const page of pages) {
      if (prev !== null && page - prev > 1) {
        withEllipsis.push('...');
      }
      withEllipsis.push(page);
      prev = page;
    }
    return withEllipsis;
  };

  return (
    <div className="flex items-center justify-center gap-1 mt-10">
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant/50 text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-outline-variant/50 disabled:hover:text-secondary"
        aria-label="Trang trước"
      >
        <span className="material-symbols-outlined text-xl">chevron_left</span>
      </button>

      {/* Page numbers */}
      {getPageNumbers().map((page, idx) =>
        page === '...' ? (
          <span
            key={`ellipsis-${idx}`}
            className="flex items-center justify-center w-10 h-10 text-secondary font-body-sm text-body-sm select-none"
          >
            …
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex items-center justify-center w-10 h-10 rounded-lg font-body-sm text-body-sm transition-all border ${
              currentPage === page
                ? 'bg-primary text-on-primary border-primary font-semibold shadow-md'
                : 'border-outline-variant/50 text-secondary hover:border-primary hover:text-primary hover:bg-primary/5'
            }`}
            aria-label={`Trang ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-10 h-10 rounded-lg border border-outline-variant/50 text-secondary hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-outline-variant/50 disabled:hover:text-secondary"
        aria-label="Trang sau"
      >
        <span className="material-symbols-outlined text-xl">chevron_right</span>
      </button>
    </div>
  );
};

export default Pagination;
