/**
 * 1. injetar dependencias de infraestrutura nas camadas
 */

// ruim
// class ProductController {
//   public list() {
//     return new ProductService().list();
//   }
// }

// class ProductService {
//   public list() {
//     return new ProductRepository().list();
//   }
// }

// class ProductRepository {
//   public list() {
//     return new DatabaseService().products()
//   }
// }

// class DatabaseService {
//   public products() {
//     this.findAll();
//   }

//   public findAll() {
//     return;
//   }
// }

// bom
class ProductController {
  constructor(private readonly service: ProductService) {}
  public list() {
    return this.service.list();
  }
}

class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  public list() {
    return this.repository.list();
  }
}

class ProductRepository {
  constructor(private readonly database: DatabaseService) {}
  public list() {
    return this.database.products();
  }
}

class DatabaseService {
  public products() {
    this.findAll();
  }

  public findAll() {
    return;
  }
}
