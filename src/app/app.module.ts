// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ArticlesComponent } from './articles/articles/articles.component';
import { SliderComponent } from './home/slider/slider.component';
import { ProductGridComponent } from './home/product-grid/product-grid.component';
import { BlogSectionComponent } from './home/blog-section/blog-section.component';
import { FooterComponent } from './home/footer/footer.component';
import { SignUpComponent } from './auth/sign-up-in/sign-up.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ArticlesComponent,
    SliderComponent,
    ProductGridComponent,
    BlogSectionComponent,
    FooterComponent,
    SignUpComponent,
    ProductDetailPageComponent,
    AlertComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
