import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="brand">🎮 GameShop</div>
            <p>Your ultimate destination for games, DLCs, and gaming gear. Secure & fast.</p>
            <div class="social-links">
              <a href="#" class="social-link">💬</a>
              <a href="#" class="social-link">🐦</a>
              <a href="#" class="social-link">📺</a>
            </div>
          </div>
          <div class="footer-links">
            <h4>Shop</h4>
            <a routerLink="/products">All Products</a>
            <a routerLink="/products" [queryParams]="{featured: true}">Featured</a>
            <a routerLink="/cart">Cart</a>
            <a routerLink="/wishlist">Wishlist</a>
          </div>
          <div class="footer-links">
            <h4>Account</h4>
            <a routerLink="/auth/login">Login</a>
            <a routerLink="/auth/register">Register</a>
            <a routerLink="/orders">My Orders</a>
            <a routerLink="/profile">Profile</a>
          </div>
          <div class="footer-links">
            <h4>Support</h4>
            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
            <a href="#">Returns</a>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ year }} ShopHub. All rights reserved.</p>
          <div class="payment-icons">
            <span>💳</span> <span>🏦</span> <span>₿</span>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #0d0f1e;
      color: #5a5e7a;
      border-top: 1px solid rgba(255,255,255,0.06);
    }
    .footer-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 60px 24px 24px;
      padding-left: calc(24px);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }
    .footer-brand .brand {
      font-size: 1.3rem;
      font-weight: 800;
      color: #fff;
      margin-bottom: 12px;
      background: linear-gradient(135deg,#4f6ef7,#ec4899);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    .footer-brand p {
      font-size: 0.88rem;
      line-height: 1.65;
      margin-bottom: 16px;
      color: #5a5e7a;
    }
    .social-links { display: flex; gap: 10px; }
    .social-link {
      width: 34px; height: 34px;
      background: rgba(255,255,255,0.06);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 1rem; text-decoration: none;
      transition: all 0.2s; border: 1px solid rgba(255,255,255,0.07);
    }
    .social-link:hover { background: rgba(79,110,247,0.2); border-color: rgba(79,110,247,0.4); transform: translateY(-2px); }
    .footer-links h4 {
      color: #a0a4c0;
      font-weight: 700;
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      margin-bottom: 16px;
    }
    .footer-links a {
      display: block;
      color: #5a5e7a;
      text-decoration: none;
      margin-bottom: 10px;
      font-size: 0.88rem;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: #a0a4c0; }
    .footer-bottom {
      border-top: 1px solid rgba(255,255,255,0.06);
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
      color: #3a3e5a;
    }
    .footer-bottom p { color: #3a3e5a; }
    .payment-icons { display: flex; gap: 8px; font-size: 1.1rem; }
    @media (max-width: 768px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 480px) {
      .footer-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class FooterComponent {
  year = new Date().getFullYear();
}
