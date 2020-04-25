import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { CollectionPreviewComponent } from './collection-preview/collection-preview.component';
import { appRoutes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    CollectionPreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
