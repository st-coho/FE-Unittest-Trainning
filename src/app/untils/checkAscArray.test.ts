import { describe, expect, it } from '@jest/globals';
import { isAscNumArray } from './checkAscArray';

describe('Check array is number sorted ASC', () => {
    describe('The input is not an array', () => {
      it('Return flase if data input is not an array', () => {
        expect(isAscNumArray('FE')).toBe(false);
      });
      it('Return false when input data is number', () => {
        expect(isAscNumArray(2023)).toBe(false);
      });
      it('Return false when input data is boolean (false)', () => {
        expect(isAscNumArray(false)).toBe(false);
      });
      it('Return false when input data is boolean (true)', () => {
        expect(isAscNumArray(true)).toBe(false);
      });
      it('Return false when input data is NaN', () => {
        expect(isAscNumArray(NaN)).toBe(false);
      });
      it('Return false when input data is undefined', () => {
        expect(isAscNumArray(undefined)).toBe(false);
      });
      it('Return false when input data is object', () => {
        expect(isAscNumArray({})).toBe(false);
      });
      it('Return false when input data is Null', () => {
        expect(isAscNumArray(null)).toBe(false);
      });
      it('Return false when input data is Symbol', () => {
        expect(isAscNumArray(Symbol)).toBe(false);
      });
      it('Return false when input data is Bigint', () => {
        expect(isAscNumArray(BigInt)).toBe(false);
      });
    });

    describe('Check the input is not a number array', () => {
      it('Return false when input data is empty array', () => {
        expect(isAscNumArray([])).toBe(false);
      });
      it('Return flase when input data is string array', () => {
        expect(isAscNumArray(['Supremetech', 'FE'])).toBe(false);
      });
      it('Return flase when input data is boolean array', () => {
        expect(isAscNumArray([true, false])).toBe(false);
      });
      it('Return flase when data input array has a lot of type element', () => {
        expect(isAscNumArray([undefined, 'FE', 2023, 4])).toBe(false);
      });
      it('Return flase when input data array string', () => {
        expect(isAscNumArray(['Supremetech', 'FE', 'SUN'])).toBe(false);
      });
    });

    describe('Check when input data is array numbers', () => {
      it('Return false when array has 1 element', () => {
        expect(isAscNumArray([9])).toBe(false);
      });
      it('Return false when random array numbers', () => {
        expect(isAscNumArray([3, 4, 9, 0, 2])).toBe(false);
      });
      it('Return true when data input has one value numbers', () => {
        expect(isAscNumArray([18, 18, 18, 18])).toBe(true);
      });
      it('Return false when DESC sorted array', () => {
        expect(isAscNumArray([20, 15, 10, 5])).toBe(false);
      });
      it('Return true when data input is ASC array numbers', () => {
        expect(isAscNumArray([5, 10, 15, 20])).toBe(true);
      });
      it('Return true when data input has duplicate value', () => {
        expect(isAscNumArray([7, 9, 11, 11])).toBe(true);
      });
    });
  });