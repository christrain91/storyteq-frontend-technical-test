import React from 'react';
import Modal from '../Modal';
import VehicleDetailItem from './components/VehicleDetailItem';

import './styles.scss';

/**
 * @typedef {Object} VehicleDetailsModalProps
 * @property {VehicleSummaryPayload} vehicle The vehicle to display the details of
 * @property {boolean} isOpen The modal open state
 * @property {() => void} onClose The modal close handler
 */

/**
 * A modal to show the details of a vehicle
 *
 * @param {VehicleDetailsModalProps} props
 * @returns {React.ReactElement}
 */
export default function VehicleDetailsModal ({ vehicle, isOpen, onClose }) {
  if (!vehicle) return null;

  const mainImage = vehicle.media[0];

  return (
    <Modal testId="vehicle-details-modal" title={`${vehicle.id.toUpperCase()}`} isOpen={isOpen} onClose={onClose}>
      <figure className="vehicle-image">
        <img src={mainImage.url} alt={vehicle.id} />
      </figure>
      <section className="vehicle-details">
        <p>
          <strong>
            From
            {' '}
            {vehicle.price}
          </strong>
        </p>
        <p>{vehicle.description}</p>
        <VehicleDetailItem label="Body Style" values={vehicle.meta.bodystyles} />
        <VehicleDetailItem label="Drivetrain" values={vehicle.meta.drivetrain} />
        <p className="vehicle-emissions">
          {vehicle.meta.emissions.template.replace('$value', vehicle.meta.emissions.value)}
        </p>
      </section>
    </Modal>
  );
}
