import { multiply, isSmallerThan10 } from './1_basics';

// Learn Jest at this free course:
// https://www.youtube.com/watch?v=__QEPUdnJS0
describe('1_Basics', () => {
  describe('multiply()', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(3, 5)).toBe(15);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(-2, 4)).toBe(-8);
     
    });
  });

  describe('isSmallerThan10()', () => {
    it('It should compare if the number is smaller than 10', () => {
      expect(isSmallerThan10(5)).toBe('yes dah!');
      expect(isSmallerThan10(10)).toBe('not really...');
      expect(isSmallerThan10(11)).toBe('not really...');

    });
  });
});


