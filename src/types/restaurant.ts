export type MenuCategory = 
  | 'All'
  | 'Combos'
  | 'Shawaya'
  | 'Broast'
  | 'Mandi'
  | 'Bishawari Rice'
  | 'Mojitos (Bene Tibi)'
  | 'Mojitos'
  | 'Grills'
  | 'Desserts';

export interface PortionPrice {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  pricePlaceholder?: string;
  price?: number;
  portions?: PortionPrice[];
  portionOptions?: string[];
  image: string;
  badge?: string;
  isPopular?: boolean;
  spiciness?: 'Mild' | 'Medium' | 'Spicy';
  isOfficialCardItem?: boolean;
  isComingSoon?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  avatarLetter: string;
  source: string;
  favoriteDish?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  diningType: 'Dine-in' | 'Takeaway' | 'Party Order' | 'General Enquiry';
  guests?: string;
  message: string;
}

