type Discount = {
  number: number;
  precent: number;
};

export type Product = {
  id: string;
  price: number;
  number: number;
  name: string;
  discount: Discount[];
};

export class ProductList {
  productList: Product[] = [];

  constructor(data: Product[]) {
    this.productList = [...data];
  }

  getProductList() {
    return this.productList;
  }

  addProduct(product: Product) {
    if(product) {
      this.productList.push(product);
    } else {
      return 'Invalid parameter';
    }
  }

  getProduct(id: string) {
    if(id) {
      return this.productList.find((item: Product) => item.id === id);
    } else {
      return 'Invalid parameter';
    }
  }

  removeProduct(id: string) {
    if(id) {
      this.productList = this.productList.filter((item: Product) => item.id !== id);
    } else {
      return 'Invalid parameter';
    }
  }

  updateProduct(product: Product) {
    if(product) {
      this.productList = this.productList.map((item: Product) => {
        if(item.id === product.id) {
          return product;
        }
        return item;
      });
    } else {
      return 'Invalid parameter';
    }
  }

  clearProductList() {
    this.productList = [];
  }

  countTotalPayment() {
    return this.productList.reduce((sum, product: Product) => {
      let discount = 0;
      product.discount.forEach((item: Discount) => {
        if(product.number >= item.number && item.precent > discount) {
          discount = item.precent;
        }
      });
      return sum + (product.price * product.number * (100 - discount)) / 100;
    },0);
  }
}
