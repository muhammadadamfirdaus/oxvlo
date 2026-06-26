import Link from 'next/link';

const sizeClasses = {
  sm: 'text-sm font-bold px-5 py-[11px] rounded-[8px]',
  md: 'text-base font-bold px-[30px] py-[15px] rounded-[10px]',
  lg: 'text-base font-bold px-9 py-4 rounded-[10px]',
};

const variantClasses = {
  primary: 'bg-oxv-accent text-oxv-accent-foreground oxv-button-primary',
  secondary: 'bg-oxv-background-hover border border-oxv-border-subtle text-oxv-text',
};

function Button({ variant = 'primary', size = 'md', href, className = '', children, onClick }) {
  const classes = `inline-block cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
