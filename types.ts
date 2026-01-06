
export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: 'Japan' | 'Europe';
  description: string;
}

export interface NavItem {
  label: string;
  id: string;
}

export enum PageType {
  HOME = 'home',
  JAPAN_COLLECTION = 'japan',
  EUROPE_COLLECTION = 'europe',
  CRAFTSMANSHIP = 'craftsmanship',
  SUSTAINABILITY = 'sustainability',
  LOOKBOOK = 'lookbook',
  STORES = 'stores',
  ABOUT = 'about',
  JOURNAL = 'journal',
  CONTACT = 'contact'
}
