import { Book } from './books.model';

export interface MyCollection {
  name: string;
  email: string;
  phone: string;
  address: string;
  items: Book[];
}
