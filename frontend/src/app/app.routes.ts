import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { adminGuard } from './core/guards/admin.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'products',
    loadComponent: () => import('./features/products/product-list/product-list.component').then(m => m.ProductListComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./features/products/product-detail/product-detail.component').then(m => m.ProductDetailComponent)
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then(m => m.CartComponent)
  },
  {
    path: 'checkout',
    canActivate: [authGuard],
    loadComponent: () => import('./features/checkout/checkout/checkout.component').then(m => m.CheckoutComponent)
  },
  {
    path: 'checkout/confirmation',
    canActivate: [authGuard],
    loadComponent: () => import('./features/checkout/order-confirmation/order-confirmation.component').then(m => m.OrderConfirmationComponent)
  },
  {
    path: 'orders',
    canActivate: [authGuard],
    loadComponent: () => import('./features/orders/order-list/order-list.component').then(m => m.OrderListComponent)
  },
  {
    path: 'orders/:id',
    canActivate: [authGuard],
    loadComponent: () => import('./features/orders/order-detail/order-detail.component').then(m => m.OrderDetailComponent)
  },
  {
    path: 'wishlist',
    canActivate: [authGuard],
    loadComponent: () => import('./features/wishlist/wishlist.component').then(m => m.WishlistComponent)
  },
  {
    path: 'profile',
    canActivate: [authGuard],
    loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'auth/forgot-password',
    loadComponent: () => import('./features/auth/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'admin',
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import('./features/admin/dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent)
  },
  {
    path: 'admin/products',
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import('./features/admin/manage-products/manage-products.component').then(m => m.ManageProductsComponent)
  },
  {
    path: 'admin/categories',
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import('./features/admin/manage-categories/manage-categories.component').then(m => m.ManageCategoriesComponent)
  },
  {
    path: 'admin/orders',
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import('./features/admin/manage-orders/manage-orders.component').then(m => m.ManageOrdersComponent)
  },
  {
    path: 'admin/users',
    canActivate: [authGuard, adminGuard],
    loadComponent: () => import('./features/admin/manage-users/manage-users.component').then(m => m.ManageUsersComponent)
  },
  {
    path: 'ui',
    loadComponent: () => import('./features/ui-showcase/ui-showcase.component').then(m => m.UiShowcaseComponent)
  },
  { path: '**', redirectTo: '' }
];
