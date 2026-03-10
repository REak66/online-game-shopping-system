import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth`;
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const stored = localStorage.getItem('user');
    if (stored) {
      try { this.currentUserSubject.next(JSON.parse(stored)); } catch {}
    }
  }

  get currentUser(): User | null { return this.currentUserSubject.value; }
  get isLoggedIn(): boolean { return !!this.currentUser; }
  get isAdmin(): boolean { return this.currentUser?.role === 'admin'; }
  get token(): string | null { return localStorage.getItem('token'); }

  register(data: { name: string; email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data).pipe(
      tap((res: any) => { if (res.success) this.setAuth(res); })
    );
  }

  login(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data).pipe(
      tap((res: any) => { if (res.success) this.setAuth(res); })
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
  }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  updateProfile(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, data).pipe(
      tap((res: any) => {
        if (res.success) {
          const updated = { ...this.currentUser, ...res.user };
          localStorage.setItem('user', JSON.stringify(updated));
          this.currentUserSubject.next(updated);
        }
      })
    );
  }

  changePassword(data: { currentPassword: string; newPassword: string }): Observable<any> {
    return this.http.put(`${this.apiUrl}/change-password`, data);
  }

  uploadAvatar(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('avatar', file);
    return this.http.post(`${this.apiUrl}/profile/avatar`, formData).pipe(
      tap((res: any) => {
        if (res.success) {
          const updated = { ...this.currentUser, avatar: res.avatar };
          localStorage.setItem('user', JSON.stringify(updated));
          this.currentUserSubject.next(updated as User);
        }
      })
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgot-password`, { email });
  }

  resetPassword(token: string, password: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/reset-password/${token}`, { password });
  }

  private setAuth(res: any): void {
    localStorage.setItem('token', res.token);
    localStorage.setItem('user', JSON.stringify(res.user));
    this.currentUserSubject.next(res.user);
  }
}
