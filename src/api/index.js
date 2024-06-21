// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

const MAIN_ENDPOINT = '/api/vehicles.json';

/**
 * Get the final data for a given vehicle
 *
 * @param {vehicleBasicPayload} vehicle The vehicle to get the final data for
 * @returns {Promise<vehicleSummaryPayload | null>}
 */
async function getVehicleData (vehicle) {
  const data = await request(vehicle.apiUrl).catch(() => null);

  if (!data || !data.price) {
    return null;
  }

  return {
    ...vehicle,
    ...data
  };
}

/**
 * Get the top level vehicles data from the main endpoint
 *
 * @returns {Promise<Array.<vehicleBasicPayload>>}
 */
function getTopLevelVehiclesData() {
  return request(MAIN_ENDPOINT);
}

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
export default async function getData() {
  const data = await getTopLevelVehiclesData();
  const vehicles = await Promise.all(data.map(getVehicleData));

  // Filter out the vehicles we couldn't get valid data for
  return vehicles.filter((vehicle) => Boolean(vehicle));
}
