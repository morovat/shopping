import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { CanfigurationComponent } from './canfiguration/canfiguration.component';
import { ReportsComponent } from './reports/reports.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CatComponent } from './category/cat/cat.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { OrderComponent } from './orders/order/order.component';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import { OrderfilterPipe } from './pip/orderfilter.pipe';
import { ProductComponent } from './products/product/product.component';
import {JalaliPipe} from './pip/jalali.pipe';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { SortPipe } from './pip/sort.pipe';
import { NgSelect2Module } from 'ng-select2';
import {NgxLocalStorageModule} from 'ngx-localstorage';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {NgDatepickerModule} from 'ng2-datepicker';
const routes: Routes = [
  // {    path: '', component: LoginComponent},
  {    path: '', component: DashboardComponent},
  {    path: 'orders', component: OrdersComponent},
  {    path: 'order', component: OrderComponent},
  {    path: 'order/:id', component: OrderComponent},
  {    path: 'products', component: ProductsComponent},
  {    path: 'category', component: CategoryComponent},
  {    path: 'configuration', component: CanfigurationComponent},
  {    path: 'reports', component: ReportsComponent},
  {    path: 'cat', component: CatComponent},
  {    path: 'cat/:id', component: CatComponent},
  {    path: 'product', component: ProductComponent},
  {    path: 'product/:id', component: ProductComponent},
];
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    OrdersComponent,
    CanfigurationComponent,
    ReportsComponent,
    LoginComponent,
    CatComponent,
    OrderComponent,
    OrderfilterPipe,
    ProductComponent,
    JalaliPipe,
    JalaliPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFontAwesomeModule,
    FormsModule,
    HttpClientModule,
    DpDatePickerModule,
    NgSelect2Module,
    Ng2SearchPipeModule,
    NgxLocalStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    NgDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
