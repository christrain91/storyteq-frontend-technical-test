import React from 'react';
import Tag from '../../../Tag';
import { toTitleCase } from '../../../../lib/util/string';

import './style.scss';

/**
 * @typedef {Object} VehicleDetailItemProps
 * @property {string} label  The label to display
 * @property {Array.<string>} values The values to display
 */

/**
 * A component that displays a label and a formatted tag for each value
 *
 * @param {VehicleDetailItemProps} props
 * @returns {React.ReactElement}
 */
export default function VehicleDetailItem ({ label, values }) {
  return (
    <section className="vehicle-detail-item">
      <h4>{label}</h4>
      <ul>
        {values.map((value) => (
          <li key={value}>
            <Tag>{toTitleCase(value)}</Tag>
          </li>
        ))}
      </ul>
    </section>
  );
}
