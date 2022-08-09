/**
 * 1. exemplo para parsear e printar arquivos
 */

// ruim
// class CSVParser {
//   public parse(path: string): string {
//     console.log(path);
//     return 'name,email,active';
//   }
// }

// class JSONParser {
//   public parse(path: string): string {
//     console.log(path);
//     return 'name,email,active';
//   }
// }

// class StdoutPrinter {
//   constructor(private readonly fileToPrint: string) {}
//   public print(parser: CSVParser): string {
//     console.log(parser.parse(this.fileToPrint));
//     return '';
//   }
// }

// const csvParser = new CSVParser();
// const jsonParser = new JSONParser();
// const printer = new StdoutPrinter('/some/path/some-file.csv');
// printer.print(csvParser);
// printer.print(jsonParser);

// bom

abstract class Parser {
  public parse(path: string): string {
    this.log(path);
    return 'OII';
  }

  protected log(path: string) {
    console.log(path);
  }
}

class CSVParser extends Parser {
  public parse(path: string): string {
    super.log(path);
    return 'name,email,active';
  }
}

class JSONParser extends Parser {
  public parse(path: string): string {
    super.log(path);
    return JSON.stringify({ someKey: 'someValue' });
  }
}
