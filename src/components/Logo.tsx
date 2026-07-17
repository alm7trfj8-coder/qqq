import { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

export default function Logo({ size = 40, className, ...props }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="logoPGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7B1FA2" />
          <stop offset="35%" stopColor="#FF2D7A" />
          <stop offset="100%" stopColor="#FF8A00" />
        </linearGradient>
      </defs>
      
      {/* Outer Stylized 'P' shape */}
      <path
        d="M 32 25 L 88 81 H 41 L 83 175 L 83 120 C 130 120 160 100 160 72.5 C 160 45 130 25 88 25 Z"
        fill="url(#logoPGrad)"
        fillRule="evenodd"
      />
      
      {/* Inner White Play Button with rounded corners */}
      <path
        d="M 92 59 C 92 56 95 55 97 56 L 121 70 C 123 71 123 74 121 75 L 97 89 C 95 90 92 89 92 86 Z"
        fill="white"
      />
    </svg>
  );
}
