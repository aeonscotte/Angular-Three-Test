// import { ApplicationConfig } from '@angular/core';
// import { provideRouter, Route } from '@angular/router';

// const routes: Route[] = [
//   {
//     path: '',
//     loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
//   },
//   {
//     path: 'about',
//     loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
//   },
//   {
//     path: 'contact',
//     loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
//   },
//   { path: '**', redirectTo: '' },
// ];

// export const appConfig: ApplicationConfig = {
//   providers: [provideRouter(routes)],
// };

import { ApplicationConfig } from '@angular/core';
import { provideRouter, Route, withPreloading, PreloadAllModules } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withPreloading(PreloadAllModules)), // Preloads routes for faster navigation
  ],
};