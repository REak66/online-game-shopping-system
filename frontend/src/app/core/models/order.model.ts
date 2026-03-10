export interface Order {
  _id: string;
  user: string | { name: string; email: string };
  orderItems: OrderItem[];
  paymentMethod: string;
  itemsPrice: number;
  taxPrice: number;
  totalPrice: number;
  status: 'pending' | 'paid' | 'processing' | 'delivered' | 'cancelled';
  isPaid: boolean;
  paidAt?: string;

  trackingNumber?: string;
  createdAt: string;
}

export interface OrderItem {
  product: string | { name: string; image: string };
  name: string;
  image: string;
  price: number;
  quantity: number;
}
