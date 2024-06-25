import { composeTemplateString } from '../string';

describe('string utils', () => {
  describe('composeTemplateString', () => {
    it('should replace the placeholders in the template with the data provided', () => {
      const template = 'Hello $name, welcome to $place';
      const data = { name: 'John', place: 'London' };
      const result = composeTemplateString(template, data);
      expect(result).toBe('Hello John, welcome to London');
    });
  });
});
