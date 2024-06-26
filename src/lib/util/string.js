/**
 * Compose a template string, replacing the placeholders with the data provided
 *
 * @param {string} template The template string with placeholders
 * @param {Object} data The data to replace the placeholders with
 *
 * @returns {string} The template string with the placeholders replaced by the data
 */
export function composeTemplateString (template, data) {
  const acceptedTypes = ['string', 'number'];
  let result = template;
  Object.keys(data).forEach((key) => {
    let replaceWith = '';
    if (acceptedTypes.includes(typeof data[key])) {
      replaceWith = data[key];
    }
    result = result.replace(`$${key}`, replaceWith);
  });
  return result;
}

/**
 * Convert a string to title case
 *
 * @param {string} value The string to convert to title case
 * @returns {string} The string with the first character of each word converted to uppercase
 */
export function toTitleCase (value) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}
