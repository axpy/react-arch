export class ApprovedItemsCategoryDto {
  name: string;
  id: string;

  constructor(
    name: string,
    id: string
  ) {
    this.name =  name;
    this.id =  id;
  }
}

export class ApprovedItemsItemDto {
  name: string;

  constructor(
    name: string,
  ) {
    this.name =  name;
  }
}

