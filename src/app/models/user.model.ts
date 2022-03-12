export class User {
  public id: number;
  public username: string;
  public password: string;
  public firstName: string;
  public lastName: string;
  public phone: string;
  public email: string;
  public reviewer: boolean;
  public admin: boolean;

  constructor(id: number, username: string, password: string, firstName: string,
              lastName: string, phone: string, email: string,
              reviewer: boolean, admin: boolean ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
    this.reviewer = reviewer;
    this.admin = admin;
  }

}
