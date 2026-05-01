import fallbackLogo from "../../logo.png";

const basePath = import.meta.env.BASE_URL || "/";

function LogoImage({ variant, className, alt }) {
  const logoPath = `${basePath}brand/logo-${variant}.png`;

  function handleError(event) {
    if (event.currentTarget.src !== fallbackLogo) {
      event.currentTarget.src = fallbackLogo;
    }
  }

  return <img src={logoPath} alt={alt} className={className} onError={handleError} />;
}

function BrandLogo({ className = "h-8 w-8 object-contain", wrapperClassName = "", alt = "" }) {
  return (
    <span className={`brand-logo inline-grid place-items-center ${wrapperClassName}`}>
      <LogoImage variant="light" alt={alt} className={`brand-logo-light ${className}`} />
      <LogoImage variant="dark" alt={alt} className={`brand-logo-dark ${className}`} />
    </span>
  );
}

export default BrandLogo;
