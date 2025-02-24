import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ListsPage } from './lists/lists.page';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then(m => m.routes),
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'activities',
    loadComponent: () => import('./bookmarks/bookmarks.page').then( m => m.BookmarksPage)
  },
  {
    path: 'locations',
    loadComponent: () => import('./bookmarks/bookmarks.page').then( m => m.BookmarksPage)
  },
  {
    path: 'new',
    loadComponent: () => import('./new/new.page').then( m => m.NewPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./pages/map/map.page').then( m => m.MapPage)
  },
];
