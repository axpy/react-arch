class UserModel {
  readonly id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  setName(name: string) {
    this.name = name;
  }
}

export {
  UserModel
}