import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class WishlistService {
  private apiUrl = `${environment.apiUrl}/wishlist`;
  private wishlistSubject = new BehaviorSubject<any>(null);
  wishlist$ = this.wishlistSubject.asObservable();

  constructor(private http: HttpClient) {}

  getWishlist(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      tap((res: any) => { if (res.success) this.wishlistSubject.next(res.wishlist); })
    );
  }

  addToWishlist(productId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, { productId }).pipe(
      tap((res: any) => { if (res.success) this.wishlistSubject.next(res.wishlist); })
    );
  }

  removeFromWishlist(productId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${productId}`).pipe(
      tap(() => {
        const current = this.wishlistSubject.value;
        if (current) {
          current.products = current.products.filter((p: any) => p._id !== productId);
          this.wishlistSubject.next({ ...current });
        }
      })
    );
  }

  isInWishlist(productId: string): boolean {
    return this.wishlistSubject.value?.products?.some((p: any) => p._id === productId) || false;
  }
}
