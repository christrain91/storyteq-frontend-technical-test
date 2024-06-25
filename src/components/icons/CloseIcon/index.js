import React from 'react';

/**
 * @typedef {Object} CloseIconProps
 * @property {number} [size] - The size of the icon
 * @property {string} [color] - The color of the icon
 */
export default function CloseIcon ({ size = 24, color = 'currentColor' }) {
  return (
    <svg
      role="img"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
