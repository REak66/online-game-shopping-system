import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OrderService } from '../../../core/services/order.service';
import { CartService } from '../../../core/services/cart.service';
import { AuthService } from '../../../core/services/auth.service';
import { Cart } from '../../../core/models';
import { NotificationService } from '../../../shared/services/notification.service';
import { SliderComponent } from '../../../shared/components/slider/slider.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, SliderComponent],
  template: `
    <div class="page-container">
      <div class="checkout-header">
        <h1>Checkout</h1>
        <p class="header-sub">Complete your purchase in {{ totalSteps }} easy steps</p>
      </div>

      <!-- ── Step Progress Slider ── -->
      <div class="stepper-card">
        <div class="step-labels">
          <span *ngFor="let s of steps" class="step-label"
            [class.active]="currentStep === s.id"
            [class.done]="currentStep > s.id">
            <span class="step-bubble">
              <i *ngIf="currentStep > s.id" class="fas fa-check"></i>
              <span *ngIf="currentStep <= s.id">{{ s.id }}</span>
            </span>
            <span class="step-name">{{ s.label }}</span>
          </span>
        </div>
        <div class="slider-wrap">
          <app-slider
            [min]="1" [max]="totalSteps" [step]="1"
            [marks]="stepMarks"
            [tooltip]="'never'"
            [(ngModel)]="currentStep"
            (valueChange)="onSliderChange($event)">
          </app-slider>
        </div>
      </div>

      <div class="checkout-layout">

        <!-- ════ STEP 1 — Cart Review ════ -->
        <div class="checkout-form" *ngIf="currentStep === 1">
          <h2><i class="fas fa-cart-shopping" style="margin-right:10px;color:#4f6ef7"></i>Cart Review</h2>
          <p class="step-desc">Review the items in your cart before proceeding to payment.</p>

          <div class="cart-review" *ngIf="cart && cart.items.length > 0; else emptyCart">
            <div class="cart-review-item" *ngFor="let item of cart.items">
              <img [src]="getProductImage(item)" class="cart-review-img"
                onerror="this.src='https://via.placeholder.com/60x60?text=?'" />
              <div class="cart-review-info">
                <span class="cart-review-name">{{ getProductName(item) }}</span>
                <span class="cart-review-qty">Quantity: {{ item.quantity }}</span>
              </div>
              <span class="cart-review-price">\${{ (item.price * item.quantity) | number:'1.2-2' }}</span>
            </div>
          </div>

          <ng-template #emptyCart>
            <div class="empty-cart">
              <i class="fas fa-cart-xmark"></i>
              <p>Your cart is empty. <a routerLink="/products">Browse products</a></p>
            </div>
          </ng-template>

          <div class="btn-row">
            <button class="btn-back" routerLink="/cart">
              <i class="fas fa-arrow-left" style="margin-right:6px"></i>Back to Cart
            </button>
            <button class="btn-next" (click)="goToStep(2)"
              [disabled]="!cart || cart.items.length === 0">
              Continue to Payment<i class="fas fa-arrow-right" style="margin-left:8px"></i>
            </button>
          </div>
        </div>

        <!-- ════ STEP 2 — Payment Method ════ -->
        <div class="checkout-form" *ngIf="currentStep === 2">
          <h2><i class="fas fa-credit-card" style="margin-right:10px;color:#4f6ef7"></i>Payment Method</h2>
          <p class="step-desc">Choose how you would like to pay for your order.</p>

          <div class="payment-options">
            <label class="payment-option" [class.selected]="paymentMethod === 'credit_card'">
              <input type="radio" [(ngModel)]="paymentMethod" value="credit_card" />
              <span class="payment-icon"><i class="fas fa-credit-card"></i></span>
              <div>
                <strong>Credit / Debit Card</strong>
                <p>Visa, Mastercard, Amex</p>
              </div>
              <span class="payment-check" *ngIf="paymentMethod === 'credit_card'">
                <i class="fas fa-circle-check"></i>
              </span>
            </label>
            <label class="payment-option" [class.selected]="paymentMethod === 'paypal'">
              <input type="radio" [(ngModel)]="paymentMethod" value="paypal" />
              <span class="payment-icon"><i class="fa-brands fa-paypal"></i></span>
              <div>
                <strong>PayPal</strong>
                <p>Fast and secure</p>
              </div>
              <span class="payment-check" *ngIf="paymentMethod === 'paypal'">
                <i class="fas fa-circle-check"></i>
              </span>
            </label>
            <label class="payment-option" [class.selected]="paymentMethod === 'bank_transfer'">
              <input type="radio" [(ngModel)]="paymentMethod" value="bank_transfer" />
              <span class="payment-icon"><i class="fas fa-building-columns"></i></span>
              <div>
                <strong>Bank Transfer</strong>
                <p>Direct bank payment</p>
              </div>
              <span class="payment-check" *ngIf="paymentMethod === 'bank_transfer'">
                <i class="fas fa-circle-check"></i>
              </span>
            </label>
            <label class="payment-option" [class.selected]="paymentMethod === 'crypto'">
              <input type="radio" [(ngModel)]="paymentMethod" value="crypto" />
              <span class="payment-icon"><i class="fa-brands fa-bitcoin"></i></span>
              <div>
                <strong>Cryptocurrency</strong>
                <p>Bitcoin, Ethereum</p>
              </div>
              <span class="payment-check" *ngIf="paymentMethod === 'crypto'">
                <i class="fas fa-circle-check"></i>
              </span>
            </label>
          </div>

          <div class="btn-row">
            <button class="btn-back" (click)="goToStep(1)">
              <i class="fas fa-arrow-left" style="margin-right:6px"></i>Back
            </button>
            <button class="btn-next" (click)="goToStep(3)" [disabled]="!paymentMethod">
              {{ paymentMethod === 'credit_card' ? 'Enter Card Details' : 'Review Order' }}<i class="fas fa-arrow-right" style="margin-left:8px"></i>
            </button>
          </div>
        </div>

        <!-- ════ STEP 3 — Card Details (Credit/Debit only) ════ -->
        <div class="checkout-form" *ngIf="currentStep === 3 && paymentMethod === 'credit_card'">
          <h2><i class="fas fa-credit-card" style="margin-right:10px;color:#4f6ef7"></i>Card Details</h2>
          <p class="step-desc">Enter your card information to complete the payment.</p>

          <!-- Visual Card -->
          <div class="card-visual" [class.flipped]="showCvv">
            <div class="card-front">
              <div class="card-front-top">
                <div class="card-chip"><i class="fas fa-microchip"></i></div>
                <span class="card-network-text">VISA</span>
              </div>
              <div class="card-number-display">{{ cardNumber || '•••• •••• •••• ••••' }}</div>
              <div class="card-front-bottom">
                <div>
                  <div class="card-field-label">Card Holder</div>
                  <div class="card-field-value">{{ cardHolder || 'FULL NAME' }}</div>
                </div>
                <div>
                  <div class="card-field-label">Expires</div>
                  <div class="card-field-value">{{ cardExpiry || 'MM/YY' }}</div>
                </div>
              </div>
            </div>
            <div class="card-back">
              <div class="card-stripe"></div>
              <div class="card-cvv-area">
                <div class="card-cvv-line">
                  <span class="card-field-label">CVV</span>
                  <div class="card-cvv-box">{{ showCvv ? cvv : '•••' }}</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Card Form -->
          <div class="card-form">
            <div class="form-group">
              <label>Card Number</label>
              <div class="input-icon-wrap">
                <i class="fas fa-credit-card input-icon"></i>
                <input class="form-control" type="text" [(ngModel)]="cardNumber"
                  placeholder="1234 5678 9012 3456" maxlength="19"
                  (input)="formatCardNumber($event)" />
              </div>
            </div>
            <div class="form-group">
              <label>Cardholder Name</label>
              <div class="input-icon-wrap">
                <i class="fas fa-user input-icon"></i>
                <input class="form-control" type="text" [(ngModel)]="cardHolder"
                  placeholder="Alex Johnson" />
              </div>
            </div>
            <div class="two-col">
              <div class="form-group">
                <label>Expiry Date</label>
                <div class="input-icon-wrap">
                  <i class="fas fa-calendar input-icon"></i>
                  <input class="form-control" type="text" [(ngModel)]="cardExpiry"
                    placeholder="MM/YY" maxlength="5"
                    (input)="formatExpiry($event)" />
                </div>
              </div>
              <div class="form-group">
                <label>CVV</label>
                <div class="input-icon-wrap">
                  <i class="fas fa-lock input-icon"></i>
                  <input class="form-control" [type]="showCvv ? 'text' : 'password'"
                    [(ngModel)]="cvv" placeholder="•••" maxlength="4"
                    (focus)="showCvv = true" (blur)="showCvv = false" />
                  <button type="button" class="cvv-toggle" (mousedown)="$event.preventDefault(); showCvv = !showCvv" tabindex="-1">
                    <i [class]="showCvv ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
                <span class="cvv-hint"><i class="fas fa-circle-info"></i> 3–4 digits on the back of your card</span>
              </div>
            </div>
            <div class="secure-badge">
              <i class="fas fa-shield-halved"></i>
              <span>Your payment is secured with GameShop</span>
            </div>
          </div>

          <div class="btn-row">
            <button class="btn-back" (click)="goToStep(2)">
              <i class="fas fa-arrow-left" style="margin-right:6px"></i>Back
            </button>
            <button class="btn-next" (click)="goToStep(4)" [disabled]="!isCardValid">
              Review Order<i class="fas fa-arrow-right" style="margin-left:8px"></i>
            </button>
          </div>
        </div>

        <!-- ════ STEP 3/4 — Confirm & Place ════ -->
        <div class="checkout-form" *ngIf="currentStep === confirmStepNum">
          <h2><i class="fas fa-clipboard-check" style="margin-right:10px;color:#22c55e"></i>Confirm Order</h2>
          <p class="step-desc">Review your order and click Place Order to complete your purchase.</p>

          <div class="confirm-section">
            <div class="confirm-row">
              <span class="confirm-label"><i class="fas fa-wallet"></i> Payment Method</span>
              <span class="confirm-value method-badge">
                <i [class]="getPaymentIcon()"></i> {{ getPaymentLabel() }}
              </span>
            </div>
            <div class="confirm-row" *ngIf="paymentMethod === 'credit_card'">
              <span class="confirm-label"><i class="fas fa-credit-card"></i> Card</span>
              <span class="confirm-value card-masked">•••• •••• •••• {{ getMaskedCardLast4() }}</span>
            </div>
            <div class="confirm-row">
              <span class="confirm-label"><i class="fas fa-box"></i> Items</span>
              <span class="confirm-value">{{ cart?.items?.length || 0 }} item(s)</span>
            </div>
            <div class="confirm-row">
              <span class="confirm-label"><i class="fas fa-tag"></i> Subtotal</span>
              <span class="confirm-value">\${{ cart?.totalPrice | number:'1.2-2' }}</span>
            </div>
            <div class="confirm-row">
              <span class="confirm-label"><i class="fas fa-percent"></i> Tax (10%)</span>
              <span class="confirm-value">\${{ ((cart?.totalPrice || 0) * 0.1) | number:'1.2-2' }}</span>
            </div>
            <div class="confirm-divider"></div>
            <div class="confirm-row total-row">
              <span class="confirm-label">Total Due</span>
              <span class="confirm-value total-val">\${{ getTotal() | number:'1.2-2' }}</span>
            </div>
          </div>

          <div class="btn-row">
            <button class="btn-back" (click)="goToStep(paymentMethod === 'credit_card' ? 3 : 2)">
              <i class="fas fa-arrow-left" style="margin-right:6px"></i>Back
            </button>
            <button class="btn-place-order" (click)="placeOrder()" [disabled]="loading">
              <ng-container *ngIf="!loading">
                <i class="fas fa-circle-check" style="margin-right:6px"></i>Place Order
              </ng-container>
              <ng-container *ngIf="loading">
                <i class="fas fa-spinner fa-spin" style="margin-right:6px"></i>Placing Order...
              </ng-container>
            </button>
          </div>
        </div>

        <!-- ── Order Summary (always visible) ── -->
        <div class="order-summary">
          <h2>Order Summary</h2>
          <div class="summary-items" *ngIf="cart">
            <div class="summary-item" *ngFor="let item of cart.items">
              <img [src]="getProductImage(item)" class="summary-item-img"
                onerror="this.src='https://via.placeholder.com/50x50?text=?'" />
              <span class="summary-item-name">{{ getProductName(item) }}</span>
              <span class="summary-item-qty">x{{ item.quantity }}</span>
              <span class="summary-item-price">\${{ (item.price * item.quantity) | number:'1.2-2' }}</span>
            </div>
          </div>
          <div class="summary-divider"></div>
          <div class="summary-row"><span>Subtotal</span><span>\${{ cart?.totalPrice | number:'1.2-2' }}</span></div>
          <div class="summary-row"><span>Tax (10%)</span><span>\${{ ((cart?.totalPrice || 0) * 0.1) | number:'1.2-2' }}</span></div>
          <div class="summary-divider"></div>
          <div class="summary-total"><span>Total</span><span>\${{ getTotal() | number:'1.2-2' }}</span></div>

          <!-- Step progress mini indicator -->
          <div class="summary-progress">
            <div class="progress-bar">
              <div class="progress-fill" [style.width]="((currentStep - 1) / (totalSteps - 1) * 100) + '%'"></div>
            </div>
            <span class="progress-label">Step {{ currentStep }} of {{ totalSteps }}</span>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .page-container {
      max-width: 1200px; margin: 0 auto; padding: 40px 20px;
      animation: pageIn 0.45s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes pageIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

    /* ── Header ── */
    .checkout-header { margin-bottom: 32px; }
    .checkout-header h1 { font-size: 2rem; font-weight: 700; margin-bottom: 4px; color: #e8eaf6; }
    .header-sub { color: #9ca3af; font-size: 0.95rem; margin: 0; }

    /* ── Stepper Card ── */
    .stepper-card {
      background: #1e2235; border-radius: 20px; padding: 28px 32px 20px;
      border: 1px solid rgba(255,255,255,0.07); margin-bottom: 32px;
    }
    .step-labels {
      display: flex; justify-content: space-between; margin-bottom: 20px;
    }
    .step-label {
      display: flex; align-items: center; gap: 10px;
      font-size: 0.9rem; font-weight: 600; color: #6b7280;
      transition: color 0.3s;
    }
    .step-label.active { color: #a5b4fc; }
    .step-label.done  { color: #4ade80; }
    .step-bubble {
      width: 30px; height: 30px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 0.82rem; font-weight: 700;
      background: rgba(255,255,255,0.07); color: #6b7280;
      border: 2px solid rgba(255,255,255,0.1);
      transition: all 0.3s;
    }
    .step-label.active .step-bubble {
      background: rgba(79,110,247,0.2); color: #a5b4fc;
      border-color: #4f6ef7; box-shadow: 0 0 0 4px rgba(79,110,247,0.15);
    }
    .step-label.done .step-bubble {
      background: rgba(34,197,94,0.18); color: #4ade80;
      border-color: #22c55e;
    }
    .step-name { white-space: nowrap; }
    .slider-wrap { padding: 4px 0 8px; }

    /* ── Layout ── */
    .checkout-layout { display: grid; grid-template-columns: 1fr 380px; gap: 32px; }
    .checkout-form {
      background: #1e2235; border-radius: 20px; padding: 32px;
      border: 1px solid rgba(255,255,255,0.07);
      animation: cardIn 0.4s cubic-bezier(0.16,1,0.3,1) both;
    }
    @keyframes cardIn { from{opacity:0;transform:translateY(16px) scale(0.97)} to{opacity:1;transform:translateY(0) scale(1)} }
    .checkout-form h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 6px; color: #e8eaf6; }
    .step-desc { font-size: 0.88rem; color: #9ca3af; margin: 0 0 24px; }

    /* ── Cart Review (Step 1) ── */
    .cart-review { display: flex; flex-direction: column; gap: 14px; margin-bottom: 28px; }
    .cart-review-item {
      display: flex; align-items: center; gap: 14px; padding: 14px;
      background: rgba(255,255,255,0.03); border-radius: 12px;
      border: 1px solid rgba(255,255,255,0.06); transition: border-color 0.2s;
    }
    .cart-review-item:hover { border-color: rgba(79,110,247,0.3); }
    .cart-review-img { width: 58px; height: 58px; object-fit: cover; border-radius: 10px; }
    .cart-review-info { flex: 1; display: flex; flex-direction: column; gap: 4px; }
    .cart-review-name { font-weight: 600; color: #e8eaf6; font-size: 0.92rem; }
    .cart-review-qty { font-size: 0.8rem; color: #9ca3af; }
    .cart-review-price { font-weight: 700; color: #a5b4fc; font-size: 0.95rem; }
    .empty-cart {
      text-align: center; padding: 40px 20px; color: #6b7280;
      font-size: 0.95rem;
    }
    .empty-cart i { font-size: 2.5rem; margin-bottom: 12px; display: block; }
    .empty-cart a { color: #4f6ef7; text-decoration: none; }
    .empty-cart a:hover { text-decoration: underline; }

    /* ── Payment (Step 2) ── */
    .payment-options { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
    .payment-option {
      display: flex; align-items: center; gap: 16px; padding: 16px;
      border: 2px solid rgba(255,255,255,0.1); border-radius: 12px; cursor: pointer;
      transition: all 0.22s; background: rgba(255,255,255,0.03); color: #c9cbdf;
    }
    .payment-option:hover { border-color: rgba(79,110,247,0.4); background: rgba(79,110,247,0.06); }
    .payment-option.selected { border-color: #4f6ef7; background: rgba(79,110,247,0.12); }
    .payment-option input { display: none; }
    .payment-icon { font-size: 1.8rem; min-width: 36px; text-align: center; }
    .payment-option strong { display: block; font-size: 0.95rem; color: #e8eaf6; }
    .payment-option p { font-size: 0.8rem; color: #9ca3af; margin: 0; }
    .payment-check { margin-left: auto; color: #4f6ef7; font-size: 1.2rem; }

    .card-masked { font-family: monospace; letter-spacing: 2px; color: #a5b4fc; }

    /* ── Card Visual ── */
    .card-visual {
      width: 100%; max-width: 380px; height: 220px; margin: 0 auto 28px;
      perspective: 1000px; position: relative;
    }
    .card-front, .card-back {
      position: absolute; width: 100%; height: 100%; border-radius: 18px;
      backface-visibility: hidden; transition: transform 0.6s cubic-bezier(0.4,0.2,0.2,1);
      padding: 24px; box-sizing: border-box;
      background: linear-gradient(135deg, #1a1f3a 0%, #2d3461 50%, #1e2a5e 100%);
      border: 1px solid rgba(255,255,255,0.12);
      box-shadow: 0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .card-back { transform: rotateY(180deg); }
    .card-visual.flipped .card-front { transform: rotateY(-180deg); }
    .card-visual.flipped .card-back  { transform: rotateY(0deg); }
    .card-front-top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 28px; }
    .card-chip {
      width: 44px; height: 34px; background: linear-gradient(135deg, #d4a843, #f5d06e);
      border-radius: 6px; display: flex; align-items: center; justify-content: center;
      color: #7a5a00; font-size: 1.1rem;
    }
    .card-network-text {
      font-size: 1.6rem; font-weight: 900; font-style: italic;
      background: linear-gradient(90deg, #1a73e8, #4fc3f7);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      letter-spacing: 1px;
    }
    .card-number-display {
      font-size: 1.25rem; font-weight: 700; letter-spacing: 3px;
      color: #ffffff; margin-bottom: 24px; font-family: 'Courier New', monospace;
      text-shadow: 0 1px 3px rgba(0,0,0,0.4);
    }
    .card-front-bottom { display: flex; justify-content: space-between; align-items: flex-end; }
    .card-field-label { font-size: 0.65rem; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); margin-bottom: 4px; }
    .card-field-value { font-size: 0.9rem; font-weight: 600; color: #ffffff; letter-spacing: 1px; text-transform: uppercase; }
    .card-stripe { width: calc(100% + 48px); height: 48px; background: #0f1224; margin: 16px -24px 20px; }
    .card-cvv-area { display: flex; justify-content: flex-end; padding-right: 4px; }
    .card-cvv-line { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
    .card-cvv-box {
      background: #fff; color: #111; font-family: monospace;
      padding: 6px 16px; border-radius: 6px; font-size: 1rem; font-weight: 700;
      letter-spacing: 3px; min-width: 64px; text-align: center;
    }

    /* ── Card Form ── */
    .card-form { display: flex; flex-direction: column; gap: 0; }
    .form-group { margin-bottom: 18px; }
    .form-group label { display: block; margin-bottom: 7px; font-weight: 600; font-size: 0.88rem; color: #c9cbdf; }
    .input-icon-wrap { position: relative; }
    .input-icon {
      position: absolute; left: 14px; top: 50%; transform: translateY(-50%);
      color: #5a5e7a; font-size: 0.9rem; pointer-events: none;
    }
    .form-control {
      width: 100%; padding: 12px 16px 12px 40px;
      border: 2px solid rgba(255,255,255,0.1); border-radius: 10px;
      font-size: 0.95rem; outline: none;
      transition: border-color 0.25s, box-shadow 0.25s;
      box-sizing: border-box; background: rgba(255,255,255,0.05); color: #e8eaf6;
      font-family: inherit;
    }
    .form-control:focus { border-color: #4f6ef7; box-shadow: 0 0 0 3px rgba(79,110,247,0.18); }
    .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
    .cvv-toggle {
      position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
      background: none; border: none; color: #5a5e7a; cursor: pointer; padding: 4px;
      transition: color 0.2s;
    }
    .cvv-toggle:hover { color: #a5b4fc; }
    .cvv-hint { display: block; font-size: 0.75rem; color: #6b7280; margin-top: 6px; }
    .cvv-hint i { font-size: 0.7rem; }
    .secure-badge {
      display: flex; align-items: center; gap: 8px;
      background: rgba(34,197,94,0.08); border: 1px solid rgba(34,197,94,0.2);
      border-radius: 10px; padding: 12px 16px;
      font-size: 0.82rem; color: #86efac; margin-top: 4px; margin-bottom: 24px;
    }
    .secure-badge i { color: #4ade80; font-size: 1rem; }

    /* ── Confirm (Step 3/4) ── */
    .confirm-section {
      background: rgba(255,255,255,0.03); border-radius: 14px; padding: 24px;
      border: 1px solid rgba(255,255,255,0.07); margin-bottom: 28px;
    }
    .confirm-row {
      display: flex; justify-content: space-between; align-items: center;
      padding: 10px 0; font-size: 0.92rem;
    }
    .confirm-label { color: #9ca3af; display: flex; align-items: center; gap: 8px; }
    .confirm-label i { width: 16px; text-align: center; }
    .confirm-value { font-weight: 600; color: #e8eaf6; }
    .method-badge {
      background: rgba(79,110,247,0.15); color: #a5b4fc;
      padding: 4px 12px; border-radius: 20px; font-size: 0.85rem;
      display: flex; align-items: center; gap: 6px;
    }
    .confirm-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 8px 0; }
    .total-row .confirm-label { font-weight: 700; color: #e8eaf6; font-size: 1rem; }
    .total-val { font-size: 1.2rem; font-weight: 800; color: #4ade80; }

    /* ── Buttons ── */
    .btn-row { display: flex; gap: 12px; }
    .btn-back {
      padding: 14px 24px; background: transparent; color: #c9cbdf;
      border: 2px solid rgba(255,255,255,0.15); border-radius: 12px;
      font-size: 0.95rem; font-weight: 600; cursor: pointer; transition: all 0.2s;
      white-space: nowrap;
    }
    .btn-back:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.25); }
    .btn-next {
      flex: 1; padding: 14px;
      background: linear-gradient(135deg, #4f6ef7, #8b5cf6); color: white;
      border: none; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 4px 18px rgba(79,110,247,0.3);
    }
    .btn-next:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(79,110,247,0.5); }
    .btn-next:active:not(:disabled) { transform: scale(0.97); }
    .btn-next:disabled { opacity: 0.45; cursor: not-allowed; }
    .btn-place-order {
      flex: 1; padding: 14px;
      background: linear-gradient(135deg, #22c55e, #16a34a); color: white;
      border: none; border-radius: 12px; font-size: 0.95rem; font-weight: 700; cursor: pointer;
      transition: all 0.22s cubic-bezier(0.34,1.56,0.64,1);
      box-shadow: 0 4px 18px rgba(34,197,94,0.3);
    }
    .btn-place-order:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(34,197,94,0.45); }
    .btn-place-order:active:not(:disabled) { transform: scale(0.97); }
    .btn-place-order:disabled { opacity: 0.45; cursor: not-allowed; }
    .btn-place-order.btn-success-anim {
      background: linear-gradient(135deg, #22c55e, #16a34a);
      animation: successPulse 0.7s cubic-bezier(0.34,1.56,0.64,1) forwards;
      opacity: 1; cursor: default;
    }
    @keyframes successPulse {
      0%   { transform: scale(1); box-shadow: 0 4px 18px rgba(34,197,94,0.3); }
      40%  { transform: scale(1.06); box-shadow: 0 0 0 10px rgba(34,197,94,0.15), 0 8px 30px rgba(34,197,94,0.5); }
      70%  { transform: scale(0.98); }
      100% { transform: scale(1); box-shadow: 0 0 0 18px rgba(34,197,94,0), 0 4px 18px rgba(34,197,94,0.3); }
    }
    .success-checkmark {
      display: inline-flex; align-items: center; justify-content: center;
      width: 22px; height: 22px; border-radius: 50%;
      background: rgba(255,255,255,0.25); margin-right: 8px;
      animation: checkPop 0.35s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
    }
    @keyframes checkPop {
      from { transform: scale(0) rotate(-45deg); opacity: 0; }
      to   { transform: scale(1) rotate(0deg);   opacity: 1; }
    }

    /* ── Order Summary ── */
    .order-summary {
      background: #1e2235; border-radius: 20px; padding: 28px;
      border: 1px solid rgba(255,255,255,0.07);
      height: fit-content; position: sticky; top: 80px;
      animation: cardIn 0.5s cubic-bezier(0.16,1,0.3,1) 0.18s both;
    }
    .order-summary h2 { font-size: 1.3rem; font-weight: 700; margin-bottom: 20px; color: #e8eaf6; }
    .summary-items { display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px; }
    .summary-item { display: flex; align-items: center; gap: 10px; font-size: 0.85rem; }
    .summary-item-img { width: 44px; height: 44px; object-fit: cover; border-radius: 8px; transition: transform 0.25s; }
    .summary-item:hover .summary-item-img { transform: scale(1.06); }
    .summary-item-name { flex: 1; color: #c9cbdf; }
    .summary-item-qty { color: #9ca3af; }
    .summary-item-price { font-weight: 600; color: #e8eaf6; }
    .summary-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 12px 0; }
    .summary-row { display: flex; justify-content: space-between; margin-bottom: 10px; color: #9ca3af; font-size: 0.9rem; }
    .summary-total { display: flex; justify-content: space-between; font-size: 1.1rem; font-weight: 800; color: #e8eaf6; }
    .summary-progress { margin-top: 20px; }
    .progress-bar { height: 4px; background: rgba(255,255,255,0.08); border-radius: 100px; overflow: hidden; }
    .progress-fill { height: 100%; background: linear-gradient(90deg, #4f6ef7, #22c55e); border-radius: 100px; transition: width 0.4s cubic-bezier(0.34,1.56,0.64,1); }
    .progress-label { font-size: 0.78rem; color: #6b7280; display: block; text-align: right; margin-top: 6px; }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .checkout-layout { grid-template-columns: 1fr; }
      .page-container { padding: 28px 16px 80px; }
      .checkout-header h1 { font-size: 1.6rem; }
    }
    @media (max-width: 768px) {
      .page-container { padding: 20px 14px 80px; }
      .stepper-card { padding: 20px; }
      .step-name { display: none; }
      .checkout-form { padding: 22px 18px; }
      .order-summary { padding: 22px 18px; }
    }
    @media (max-width: 480px) {
      .payment-option { flex-direction: column; align-items: flex-start; gap: 10px; }
      .checkout-header h1 { font-size: 1.25rem; }
      .btn-back { padding: 12px 16px; font-size: 0.85rem; }
    }
  `]
})
export class CheckoutComponent implements OnInit {
  paymentMethod = 'credit_card';
  loading = false;
  cart: Cart | null = null;
  currentStep = 1;

  // Card details — fake pre-filled data
  cardNumber  = '';
  cardHolder  = '';
  cardExpiry  = '';
  cvv         = '';
  showCvv     = false;

  get totalSteps(): number {
    return this.paymentMethod === 'credit_card' ? 4 : 3;
  }

  get confirmStepNum(): number {
    return this.paymentMethod === 'credit_card' ? 4 : 3;
  }

  get steps() {
    if (this.paymentMethod === 'credit_card') {
      return [
        { id: 1, label: 'Cart Review' },
        { id: 2, label: 'Payment' },
        { id: 3, label: 'Card Details' },
        { id: 4, label: 'Confirm' }
      ];
    }
    return [
      { id: 1, label: 'Cart Review' },
      { id: 2, label: 'Payment' },
      { id: 3, label: 'Confirm' }
    ];
  }

  get stepMarks(): Record<number, string> {
    if (this.paymentMethod === 'credit_card') return { 1: '', 2: '', 3: '', 4: '' };
    return { 1: '', 2: '', 3: '' };
  }

  get isCardValid(): boolean {
    const rawNum = this.cardNumber.replace(/ /g, '');
    return rawNum.length >= 13 && !!this.cardHolder.trim() &&
           this.cardExpiry.length === 5 && this.cvv.length >= 3;
  }

  constructor(
    private orderService: OrderService,
    private cartService: CartService,
    private authService: AuthService,
    private router: Router,
    private msgService: NotificationService
  ) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => this.cart = cart);
    if (!this.cart) {
      this.cartService.getCart().subscribe();
    }
  }

  onSliderChange(val: number | [number, number]) {
    const step = typeof val === 'number' ? val : val[0];
    // Allow going back via slider; clamp to totalSteps
    if (step < this.currentStep && step >= 1) {
      this.currentStep = step;
    } else {
      // Snap back — user must use Next buttons to advance
      this.currentStep = Math.min(this.currentStep, this.totalSteps);
    }
  }

  formatCardNumber(event: Event) {
    const input = event.target as HTMLInputElement;
    let val = input.value.replace(/\D/g, '').substring(0, 16);
    val = val.replace(/(.{4})/g, '$1 ').trim();
    this.cardNumber = val;
    input.value = val;
  }

  formatExpiry(event: Event) {
    const input = event.target as HTMLInputElement;
    let val = input.value.replace(/\D/g, '').substring(0, 4);
    if (val.length >= 3) val = val.substring(0, 2) + '/' + val.substring(2);
    this.cardExpiry = val;
    input.value = val;
  }

  goToStep(step: number) {
    this.currentStep = step;
  }

  getProductName(item: any): string {
    if (!item.product) return 'Product';
    return typeof item.product === 'string' ? 'Product' : item.product.name;
  }

  getProductImage(item: any): string {
    if (!item.product || typeof item.product === 'string') return '';
    const img = item.product.image;
    return img ? 'http://localhost:5050' + img : '';
  }

  getTotal(): number {
    if (!this.cart) return 0;
    return this.cart.totalPrice + this.cart.totalPrice * 0.1;
  }

  getMaskedCardLast4(): string {
    return this.cardNumber.replace(/ /g, '').slice(-4) || '????';
  }

  getPaymentLabel(): string {
    const map: Record<string, string> = {
      credit_card: 'Credit / Debit Card',
      paypal: 'PayPal',
      bank_transfer: 'Bank Transfer',
      crypto: 'Cryptocurrency'
    };
    return map[this.paymentMethod] || this.paymentMethod;
  }

  getPaymentIcon(): string {
    const map: Record<string, string> = {
      credit_card: 'fas fa-credit-card',
      paypal: 'fa-brands fa-paypal',
      bank_transfer: 'fas fa-building-columns',
      crypto: 'fa-brands fa-bitcoin'
    };
    return map[this.paymentMethod] || 'fas fa-wallet';
  }

  placeOrder() {
    if (!this.paymentMethod) return;
    this.loading = true;
    this.orderService.createOrder({
      paymentMethod: this.paymentMethod
    }).subscribe({
      next: (res) => {
        const orderId = res.order._id;
        this.orderService.payOrder(orderId).subscribe({
          next: () => {
            this.loading = false;
            this.cartService.clearLocalCart();
            this.msgService.success('Payment successful! Your order has been placed.');
            setTimeout(() => {
              this.router.navigate(['/checkout/confirmation'], { queryParams: { orderId } });
            }, 1500);
          },
          error: () => {
            this.loading = false;
            this.cartService.clearLocalCart();
            this.msgService.success('Order placed! Payment status will be updated shortly.');
            setTimeout(() => {
              this.router.navigate(['/checkout/confirmation'], { queryParams: { orderId } });
            }, 1500);
          }
        });
      },
      error: (err) => {
        this.loading = false;
        this.msgService.error(err.error?.message || 'Failed to place order');
      }
    });
  }
}
