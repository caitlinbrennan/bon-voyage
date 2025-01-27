import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'bookmarks',
    loadComponent: () => import('./bookmarks/bookmarks.page').then( m => m.BookmarksPage)
  },
  {
    path: 'lists',
    loadComponent: () => import('./lists/lists.page').then( m => m.ListsPage)
  },
  {
    path: 'bookmarks',
    loadComponent: () => import('./bookmarks/bookmarks.page').then( m => m.BookmarksPage)
  },
  {
    path: 'locations',
    loadComponent: () => import('./locations/locations.page').then( m => m.LocationsPage)
  },
  {
    path: 'bookmarks',
    loadComponent: () => import('./bookmarks/bookmarks.page').then( m => m.BookmarksPage)
  },
];
