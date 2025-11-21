interface BlogThumbnailProps {
  title: string;
  category?: string;
  variant?: 'gradient1' | 'gradient2' | 'gradient3' | 'gradient4' | 'gradient5';
}

const gradients = {
  gradient1: {
    start: '#6366f1',
    end: '#8b5cf6',
    accent: '#a78bfa',
  },
  gradient2: {
    start: '#3b82f6',
    end: '#06b6d4',
    accent: '#22d3ee',
  },
  gradient3: {
    start: '#8b5cf6',
    end: '#ec4899',
    accent: '#f472b6',
  },
  gradient4: {
    start: '#f59e0b',
    end: '#ef4444',
    accent: '#fb923c',
  },
  gradient5: {
    start: '#10b981',
    end: '#3b82f6',
    accent: '#6ee7b7',
  },
};

export function BlogThumbnail({
  title,
  category,
  variant = 'gradient1',
}: BlogThumbnailProps) {
  const gradient = gradients[variant];
  const words = title.split(' ').slice(0, 4);
  const initials = words
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);

  return (
    <svg
      width="350"
      height="200"
      viewBox="0 0 350 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        <linearGradient
          id={`gradient-${variant}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop
            offset="0%"
            style={{ stopColor: gradient.start, stopOpacity: 1 }}
          />
          <stop
            offset="100%"
            style={{ stopColor: gradient.end, stopOpacity: 1 }}
          />
        </linearGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
        </filter>
      </defs>

      <rect width="350" height="200" fill="#0a0a0a" />

      <rect
        width="350"
        height="200"
        fill={`url(#gradient-${variant})`}
        opacity="0.15"
      />

      <circle
        cx="280"
        cy="40"
        r="60"
        fill={gradient.accent}
        opacity="0.1"
        filter="url(#blur)"
      />
      <circle
        cx="70"
        cy="160"
        r="50"
        fill={gradient.start}
        opacity="0.1"
        filter="url(#blur)"
      />

      <g opacity="0.6">
        <line
          x1="30"
          y1="30"
          x2="80"
          y2="30"
          stroke={gradient.accent}
          strokeWidth="2"
        />
        <line
          x1="30"
          y1="40"
          x2="60"
          y2="40"
          stroke={gradient.accent}
          strokeWidth="2"
        />
        <line
          x1="270"
          y1="170"
          x2="320"
          y2="170"
          stroke={gradient.accent}
          strokeWidth="2"
        />
        <line
          x1="290"
          y1="180"
          x2="320"
          y2="180"
          stroke={gradient.accent}
          strokeWidth="2"
        />
      </g>

      <text
        x="175"
        y="100"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="48"
        fontWeight="700"
        fill={gradient.accent}
        textAnchor="middle"
        opacity="0.9"
      >
        {initials}
      </text>

      {category && (
        <text
          x="175"
          y="130"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="14"
          fontWeight="500"
          fill={gradient.accent}
          textAnchor="middle"
          opacity="0.7"
        >
          {category.toUpperCase()}
        </text>
      )}

      <g opacity="0.3">
        <rect
          x="20"
          y="20"
          width="8"
          height="8"
          fill={gradient.accent}
          transform="rotate(45 24 24)"
        />
        <rect
          x="310"
          y="160"
          width="8"
          height="8"
          fill={gradient.accent}
          transform="rotate(45 314 164)"
        />
      </g>
    </svg>
  );
}
