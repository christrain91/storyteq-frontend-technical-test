import React from 'react';

import './style.scss';

/**
 * @typedef {Object} IconButtonProps
 * @property {React.ReactElement} children The icon to display
 * @property {string} label The label for the icon
 * @property {() => void} onClick The click handler
 * @property {string} [testId] The test id
 */

/**
 * IconButton component
 *
 * @param {IconButtonProps} props
 *
 * @returns {React.ReactElement}
 */
export default function IconButton ({
  children, label, onClick, testId
}) {
  return (
    <button onClick={onClick} data-testid={testId} className="icon-button" type="button" aria-label={label}>
      {children}
    </button>
  );
}
