import React from 'react';
import './style.scss';

/**
 * @typedef {Object} VehicleCardProps
 * @property {VehicleSummaryPayload} vehicle The vehicle to display
 * @property {(() => void)} onSelect  On select handler
 */

/**
 * A component that displays information on a single vehicle
 *
 * @param {VehicleCardProps} props
 * @returns {React.ReactElement}
 */
export default function VehicleCard ({ vehicle, onSelect }) {
  const wideImage = vehicle.media[0];
  const squareImage = vehicle.media[vehicle.media.length - 1];

  return (
    <li className="VehicleCard">
      <button type="button" data-testid="vehicle" className="VehicleCardContent" onClick={onSelect}>
        <figure data-testid="vehicle-image-container" className="ImageContainer">
          <img className="ImageWide" data-testid="vehicle-image-wide" src={wideImage.url} alt={wideImage.name} />
          <img className="ImageSquare" data-testid="vehicle-image-square" src={squareImage.url} alt={squareImage.name} />
        </figure>
        <div className="ContentContainer">
          <header>
            <h2 data-testid="vehicle-name">{vehicle.id.toUpperCase()}</h2>
          </header>
          <span data-testid="vehicle-pricing" className="Pricing">
            From
            {' '}
            {vehicle.price}
          </span>
          <p data-testid="vehicle-description" className="Description">
            {vehicle.description}
          </p>
        </div>
      </button>
    </li>
  );
}
