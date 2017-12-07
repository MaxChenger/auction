import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule} from '@angular/router';
import { ProductService } from './product.service';
import { FilterPipe } from './filter.pipe';
const routeConfig: Routes = [
  {path:'', component:HomeComponent},
  {path:'product/:productId', component:ProductDetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//http://idea.iteblog.com/key.php   webstorm破解码
