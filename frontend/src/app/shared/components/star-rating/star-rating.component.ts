import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stars">
      <span *ngFor="let star of stars" class="star" [class.filled]="star <= rating" [class.half]="isHalf(star)">
        <i class="fas fa-star"></i>
      </span>
    </div>
  `,
  styles: [`
    .stars { display: flex; gap: 2px; }
    .star { font-size: 0.85rem; color: #3a3e58; transition: color 0.2s; }
    .star.filled { color: #F59E0B; }
    .star.half { color: #F59E0B; opacity: 0.55; }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  stars = [1, 2, 3, 4, 5];

  isHalf(star: number): boolean {
    return this.rating > star - 1 && this.rating < star;
  }
}
