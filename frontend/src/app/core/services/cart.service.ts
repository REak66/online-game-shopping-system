import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cart } from '../models';

@Injectable({ providedIn: 'root' })
export class CartService {
  private apiUrl = `${environment.apiUrl}/cart`;
  private cartSubject = new BehaviorSubject<Cart | null>(null);
  cart$ = this.cartSubject.asObservable();

  constructor(private http: HttpClient) {}

  get cartCount(): number {
    return this.cartSubject.value?.items?.length || 0;
  }

  getCart(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((res: any) => { if (res.success) this.cartSubject.next(res.cart); })
    );
  }

  addToCart(productId: string, quantity: number = 1): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, { productId, quantity }).pipe(
      tap((res: any) => { if (res.success) this.cartSubject.next(res.cart); })
    );
  }

  updateCartItem(itemId: string, quantity: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/item/${itemId}`, { quantity }).pipe(
      tap((res: any) => { if (res.success) this.cartSubject.next(res.cart); })
    );
  }

  removeFromCart(itemId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/item/${itemId}`).pipe(
      tap((res: any) => { if (res.success) this.cartSubject.next(res.cart); })
    );
  }

  clearCart(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/clear`).pipe(
      tap(() => this.cartSubject.next(null))
    );
  }

  clearLocalCart(): void {
    this.cartSubject.next(null);
  }
}
