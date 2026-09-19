interface LogoProps {
  compact?: boolean;
  light?: boolean;
}

function Logo({ compact = false, light = false }: LogoProps) {
  const logoSrc = light ? '/logo/logo-white.png' : '/logo/logo.png';

  return (
    <div className='flex items-center gap-3'>
      <img src={logoSrc} alt='Logo Vektor' className={`${compact ? 'size-10' : 'size-12'} object-contain`} />
      {!compact && (
        <div className='flex flex-col leading-none'>
          <strong
            className={`font-display text-[17px] font-bold tracking-[0.22em] ${light ? 'text-white' : 'text-blue-600'}`}
          >
            VEKTOR
          </strong>
          <span
            className={`mt-1 text-[8px] font-semibold tracking-[0.25em] ${light ? 'text-slate-400' : 'text-slate-500'}`}
          >
            IT COMMUNITY
          </span>
        </div>
      )}
    </div>
  );
}

export default Logo;
