const Icon = ({ name, className = '', filled = false, ...props }) => {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'filled-icon' : ''} ${className}`}
      {...props}
    >
      {name}
    </span>
  );
};

export default Icon;
