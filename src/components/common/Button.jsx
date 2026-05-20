const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon,
  ...props 
}) => {
  const baseStyles = 'font-bold rounded-full transition-all duration-300 active:scale-95 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-primary-container text-on-primary-container hover:opacity-90',
    secondary: 'border border-primary text-primary hover:bg-primary-fixed-dim/10',
    outline: 'border border-outline-variant text-on-surface hover:bg-surface-container',
  };
  
  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
    </button>
  );
};

export default Button;
