import React from 'react';

interface MidoriLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'emblem' | 'stacked';
  colorMode?: 'light' | 'dark' | 'green' | 'gold';
  showSubtitle?: boolean;
}

export const MidoriEmblem: React.FC<{ className?: string; color?: string; bgColor?: string }> = ({
  className = "w-10 h-10",
  color = "#ffffff",
  bgColor = "currentColor"
}) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Emblema Midori"
    >
      {/* Outer circular background */}
      <circle cx="50" cy="50" r="48" fill={bgColor} />
      
      {/* Stylized Midori Pine Tree Cutout / Icon */}
      {/* Top tier chevron */}
      <path 
        d="M50 20L36 34H44V39H56V34H64L50 20Z" 
        fill={color} 
      />
      {/* Middle tier chevron */}
      <path 
        d="M50 36L32 52H42V57H58V52H68L50 36Z" 
        fill={color} 
      />
      {/* Lower tier chevron */}
      <path 
        d="M50 54L28 72H43V79H57V79V72H72L50 54Z" 
        fill={color} 
      />
      {/* Tree Trunk */}
      <rect x="45" y="79" width="10" height="9" rx="2" fill={color} />
    </svg>
  );
};

export const MidoriLogo: React.FC<MidoriLogoProps> = ({
  className = "",
  variant = 'full',
  colorMode = 'light',
  showSubtitle = true
}) => {
  // Color configuration
  const textColor = 
    colorMode === 'dark' ? '#0d281e' :
    colorMode === 'green' ? '#00a86b' :
    colorMode === 'gold' ? '#d4af37' : '#ffffff';

  const subtitleColor = 
    colorMode === 'dark' ? '#264b3c' :
    colorMode === 'gold' ? '#c4a76c' : 'rgba(244, 239, 230, 0.82)';

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <MidoriEmblem 
          className="w-12 h-12"
          bgColor={colorMode === 'green' ? '#00a86b' : '#ffffff'}
          color={colorMode === 'green' ? '#ffffff' : '#0a261d'}
        />
      </div>
    );
  }

  const isCompact = variant === 'compact';

  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      {/* Primary Brand Typography with Custom Embedded 'O' Icon */}
      <div 
        className={`flex items-center tracking-wider font-extrabold leading-none ${
          isCompact ? 'text-xl sm:text-2xl lg:text-[26px]' : 'text-[26px] sm:text-[30px] lg:text-[32px]'
        }`} 
        style={{ color: textColor }}
      >
        <span className="font-sans tracking-tight">MID</span>
        {/* The Midori 'O' with stylized tree inside */}
        <span className="relative inline-flex items-center justify-center mx-1">
          <svg 
            viewBox="0 0 80 80" 
            className={isCompact ? "w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" : "w-7 h-7 sm:w-8 sm:h-8 lg:w-[34px] lg:h-[34px]"}
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="40" cy="40" r="38" fill={textColor} />
            {/* Tree inside 'O' */}
            <path d="M40 16L27 28H35V32H45V28H53L40 16Z" fill={colorMode === 'dark' ? '#ffffff' : '#081c15'} />
            <path d="M40 29L24 43H33V47H47V43H56L40 29Z" fill={colorMode === 'dark' ? '#ffffff' : '#081c15'} />
            <path d="M40 44L21 59H34V64H46V64V59H59L40 44Z" fill={colorMode === 'dark' ? '#ffffff' : '#081c15'} />
            <rect x="36" y="64" width="8" height="6" rx="1" fill={colorMode === 'dark' ? '#ffffff' : '#081c15'} />
          </svg>
        </span>
        <span className="font-sans tracking-tight">RI</span>
      </div>

      {/* Brand Subtitle as in original logo: "Um Novo Jeito de Viver a Natureza" */}
      {showSubtitle && (
        <span 
          className={`font-normal tracking-wide whitespace-nowrap opacity-90 font-sans ${
            isCompact ? 'text-[8.5px] sm:text-[9.5px] lg:text-[10px] mt-0.5' : 'text-[9px] sm:text-[11px] lg:text-[12px] mt-1'
          }`}
          style={{ color: subtitleColor }}
        >
          Um Novo Jeito de Viver a Natureza
        </span>
      )}
    </div>
  );
};
