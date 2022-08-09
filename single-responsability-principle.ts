/**
 * 1. uma classe de dominio
 * 2. um fluxo de operacao de negocio
 */

// 1
class Order {
  client: string;
  id: number;
  items: Array<OrderItem>;
}

class OrderItem {
  product: Product;
  quantity: number;

  calc() {
    return this.product.value * this.quantity;
  }
}

class Product {
  value = 10;
}

// 2

enum Account {
  ACCOUNT_REQUIRED = 'ACCOUNT_REQUIRED',
}

class AccountController {
  constructor(private service: Service, private broker: Broker) {}
  createNewAccount() {
    this.service.create();
    this.broker.emit({ type: Account.ACCOUNT_REQUIRED });
  }
}

class Service {
  create(): void {}
}

class Broker {
  emit({ type: Account }) {
    Account;
  }
}
