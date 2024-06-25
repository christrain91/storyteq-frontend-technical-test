/**
 * Compose a template string, replacing the placeholders with the data provided
 *
 * @param {string} template The template string with placeholders
 * @param {Object} data The data to replace the placeholders with
 *
 * @returns {string} The template string with the placeholders replaced by the data
 */
export function composeTemplateString (template, data) {
  let result = template;
  Object.keys(data).forEach((key) => {
    result = result.replace(`$${key}`, data[key]);
  });
  return result;
}

export function toTitleCase (value) {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
}
