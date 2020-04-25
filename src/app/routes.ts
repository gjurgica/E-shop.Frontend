import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CollectionPreviewComponent } from './collection-preview/collection-preview.component';

export const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'preview',
        component: CollectionPreviewComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
  ]