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
    path: 'lists',
    loadComponent: () => import('./lists/lists.page').then( m => m.ListsPage)
  },
  {
    path: 'activities',
    loadComponent: () => import('./bookmarks/bookmarks.page').then( m => m.BookmarksPage)
  },
  {
    path: 'locations',
    loadComponent: () => import('./bookmarks/bookmarks.page').then( m => m.BookmarksPage)
  },
];
