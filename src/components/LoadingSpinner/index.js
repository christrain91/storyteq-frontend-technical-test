import React from 'react';
import './style.scss';

/**
 * @typedef {Object} LoadingSpinnerProps
 * @property {number} [size] The size of the spinner
 * @property {number} [duration] The duration of the spinner animation
 */

/**
 * A component that displays a loading spinner
 *
 * @param {LoadingSpinnerProps} props
 * @returns {React.ReactElement}
 */
export default function LoadingSpinner (
  { size, duration }
) {
  return (
    <div data-testid="loading-spinner" className="LoadingSpinner">
      <svg
        width={size || 50}
        height={size || 50}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 10 A 40 40 0 0 1 90 50"
          fill="none"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur={`${duration || 1}s`}
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}
