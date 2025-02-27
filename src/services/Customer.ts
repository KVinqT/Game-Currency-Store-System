export class Customer {
  public id: string;
  public name: string;
  public email: string;
  public password: string;
  public diamonds: number = 0;
  public unknownCurrency: number = 0;

  constructor(name: string, email: string, password: string) {
    this.id = "#" + Math.floor(Math.random() * 900) + 100;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public orderCurrency() {}
  public purchaseCurrency() {}
}
