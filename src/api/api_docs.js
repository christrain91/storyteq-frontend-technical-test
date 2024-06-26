/**
 * @typedef {Object} VehicleMedia
 * @property {string} name Name of image
 * @property {string} url URL of image
 */

/**
 * @typedef {Object} VehicleSummaryPayload
 * @property {string} id ID of the vehicle
 * @property {string} apiUrl API URL for price, description & other details
 * @property {string} description Description
 * @property {string} price Price
 * @property {Array.<VehicleMedia>} media Array of vehicle images
 * @property {VehicleMetadata} metadata Metadata for the vehicle
 */

/**
 * @typedef {Object} VehicleBasicPayload
 * @property {string} id ID of the vehicle
 * @property {string} modelYear The model year of the vehicle
 * @property {string} apiUrl API URL for price, description & other details
 * @property {Array.<VehicleMedia>} media Array of vehicle images
 */

/**
 * @typedef {Object} VehicleMetadata
 * @property {number} passengers Number of passengers
 * @property {Array.<string>} drivetrain Drivetrain information
 * @property {Array.<string>} bodystyles Body styles
 * @property {Emmissions} emmissions Emmissions information
 */

/**
 * @typedef {Object} Emmissions
 *
 * @property {string} template The template for emissions display
 * @property {number} value The emissions value
 */
