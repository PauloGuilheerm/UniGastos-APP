export default class UserData {
  id: string;
  name: string;
  email: string;
  token: string;
  urlImg: string;

  constructor(
    id: string,
    name: string,
    email: string,
    token: string,
    urlImg: string,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.token = token;
    this.urlImg = urlImg;
  }
}