export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  images?: string[];
  category: { _id: string; name: string } | string;
  status: 'active' | 'inactive' | 'out_of_stock';
  rating: number;
  numReviews: number;
  featured: boolean;
  reviews?: Review[];
  createdAt: string;
}

export interface Review {
  _id: string;
  user: string | { name: string; avatar?: string };
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ProductFilter {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  status?: string;
}
