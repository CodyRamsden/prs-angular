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

  constructor(id: number= 0, username: string = 'cramsden', password: string = 'FlappyBird', firstName: string = '',
              lastName: string = '', phone: string = '', email: string = '',
              reviewer: boolean = false, admin: boolean = false ) {
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
