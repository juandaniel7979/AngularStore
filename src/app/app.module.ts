import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { VocalNumbersPipe } from './pipes/vocal-numbers.pipe';
import { HighlightsDirective } from './directives/highlights.directive';
import { TimeInterceptor } from './interceptors/time.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    VocalNumbersPipe,
    HighlightsDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule
  ],
  providers: [ {provide:HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule { }
