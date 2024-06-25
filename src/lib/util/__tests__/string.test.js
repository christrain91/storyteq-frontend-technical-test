import { composeTemplateString, toTitleCase } from '../string';

describe('string utils', () => {
  describe('composeTemplateString', () => {
    it('should replace the placeholders in the template with the data provided', () => {
      const template = 'Hello $name, welcome to $place';
      const data = { name: 'John', place: 'London' };
      const result = composeTemplateString(template, data);
      expect(result).toBe('Hello John, welcome to London');
    });
  });

  describe('toTitleCase', () => {
    it('should convert the first character of each word to uppercase', () => {
      const result = toTitleCase('hello world');
      expect(result).toBe('Hello World');
    });

    it('Should keep capital letters in place', () => {
      const result = toTitleCase('hello WORLD');
      expect(result).toBe('Hello WORLD');
    });
  });
});
