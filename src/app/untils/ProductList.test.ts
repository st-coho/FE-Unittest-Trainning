import { describe, expect, it } from '@jest/globals';
import { afterEach, beforeEach } from 'node:test';
import { ProductList, Product } from './productlist';

const data1: Product = {
  id: '1',
  price: 1000,
  number: 1,
  name: 'apple',
  discount: [
    {
      precent: 5,
      number: 1
    },
    {
      precent: 10,
      number: 2
    }
  ],
};

const data2: Product = {
  id: '2',
  price: 1000,
  number: 2,
  name: 'apple',
  discount: [
    {
      precent: 5,
      number: 1
    },
    {
      precent: 10,
      number: 2
    }
  ]
};

const data3: Product = {
  id: '3',
  price: 100,
  number: 2,
  name: 'apple',
  discount: [
    {
      precent: 5,
      number: 1
    },
    {
      precent: 10,
      number: 2
    }
  ]
};

const dataUpdate: Product = {
  id: '1',
  price: 10000,
  number: 10,
  name: 'apple Gala',
  discount: [
    {
      precent: 3,
      number: 2
    },
    {
      precent: 5,
      number: 4
    }
  ]
};

describe('Testing product order', () => {
  const error = 'Invalid parameter';
  let order;

  beforeEach(() => {
    order = new ProductList([]);
  });

  afterEach(() => {
    order.clearProductList();
  });

  describe('Testing addProduct method', () => {
    it('Should addProduct successfully', () => {
      order.addProduct(data1);
      expect(order.getProductList()).toHaveLength(1);
      expect(order.productList).toContainEqual(data1);
    });
    it('Should return error if invalid param', () => {
      expect(order.addProduct(null)).toMatch(error);
      expect(order.addProduct(undefined)).toMatch(error);
    });
  });

  describe('Testing getProduct method', () => {
    it('Should getProduct successfully', () => {
      order.addProduct(data1);
      const product = order.getProduct('1');
      expect(product).toEqual(data1);
    });
    it('Should return error if invalid parameter', () => {
      expect(order.getProduct(null)).toMatch(error);
      expect(order.getProduct(undefined)).toMatch(error);
    });
  });

  describe('Testing removeProduct method', () => {
    it('Should removeProduct successfully', () => {
      order.addProduct(data1);
      order.removeProduct('1');
      expect(order.productList).toEqual([]);
    });
    it('Should return error if invalid param', () => {
      expect(order.removeProduct(null)).toMatch(error);
      expect(order.removeProduct(undefined)).toMatch(error);
    });
  });

  describe('Testing updateProduct method', () => {
    it('Should updateProduct successfully', () => {
      order.addProduct(data1);
      order.updateProduct(dataUpdate);
      expect(order.productList).toEqual([dataUpdate]);
    });
    it('Should return error if invalid parameter', () => {
      expect(order.updateProduct(null)).toMatch(error);
      expect(order.updateProduct(undefined)).toMatch(error);
    });
  });

  describe('Testing countTotalPayment method', () => {
    it('Should return total = 0 in when empty productList', () => {
      expect(order.countTotalPayment()).toEqual(0);
    });
    it('Should count totalPayment is correctly', () => {
      order.addProduct(data1);
      expect(order.countTotalPayment()).toEqual(950);
      order.addProduct(data2);
      expect(order.countTotalPayment()).toEqual(2750);
      order.addProduct(data3);
      expect(order.countTotalPayment()).toEqual(2930);
    });
  });
});
