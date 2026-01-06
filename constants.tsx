
import { PageType, NavItem, Product } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Collection', id: PageType.HOME },
  { label: 'The Orient', id: PageType.JAPAN_COLLECTION },
  { label: 'The Occident', id: PageType.EUROPE_COLLECTION },
  { label: 'Artisans', id: PageType.CRAFTSMANSHIP },
  { label: 'Philosophy', id: PageType.SUSTAINABILITY },
  { label: 'Lookbook', id: PageType.LOOKBOOK },
  { label: 'Ateliers', id: PageType.STORES },
  { label: 'Heritage', id: PageType.ABOUT },
  { label: 'Journal', id: PageType.JOURNAL },
  { label: 'Connect', id: PageType.CONTACT },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Raw Indigo Kimono Wrap',
    price: '$450',
    image: 'https://picsum.photos/seed/indigo/600/800',
    category: 'Japan',
    description: 'Hand-dyed indigo fabric from Okayama.'
  },
  {
    id: '2',
    name: 'Venetian Silk Blouse',
    price: '$380',
    image: 'https://picsum.photos/seed/venice/600/800',
    category: 'Europe',
    description: 'Fine silk sourced from the heart of Italy.'
  },
  {
    id: '3',
    name: 'Sashiko Stitch Trousers',
    price: '$320',
    image: 'https://picsum.photos/seed/sashiko/600/800',
    category: 'Japan',
    description: 'Traditional reinforcement stitching for longevity.'
  },
  {
    id: '4',
    name: 'Parisian Wool Overcoat',
    price: '$890',
    image: 'https://picsum.photos/seed/paris/600/800',
    category: 'Europe',
    description: 'Structural elegance for the modern boulevard.'
  }
];
