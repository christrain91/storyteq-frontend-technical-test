import React from 'react';

import './style.scss';

/**
 * @typedef {Object} TagProps
 * @property {React.ReactElement|Array.<React.ReactElement>} children  The content to display in the tag
 */

/**
 * A component for display a value within a styled tag
 *
 * @param {TagProps} props
 * @returns {React.ReactElement}
 */
export default function Tag ({ children }) {
  return <span className="tag">{children}</span>;
}
