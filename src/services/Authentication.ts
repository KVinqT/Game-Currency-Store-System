import { Customer } from "./Customer";

export class Authentication {
  private authenticatedUsers: Array<Customer> = [];

  public registerCustomer(toRegisterCustomer: Customer) {
    console.log("To register customer", toRegisterCustomer);
    this.authenticatedUsers.push(toRegisterCustomer);
    console.log(
      `User ${
        this.authenticatedUsers[this.authenticatedUsers.length - 1].name
      } is regitserd successfully!`
    );
    return true;
  }
  public loginCustomer(email: string, password: string) {
    //check email and password with the customer inside above authUsers array
    const foundUser = this.authenticatedUsers.find((authUser) => {
      return authUser.email === email && authUser.password === password;
    });
    if (foundUser) {
      return {
        isSuccess: true,
        foundUser,
      };
    } else {
      return false;
    }
  }
  public isCustomerAuthenticate() {}
}
