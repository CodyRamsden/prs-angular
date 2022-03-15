export class Vendor {
  public id: number;
  public code: string;
  public name: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public phone: string;
  public email: string;

  constructor(id: number= 0, code: string='', name: string='', address: string='', city: string='',
          state: string='', zip: string='', phone: string='', email: string='' ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
  }

}
