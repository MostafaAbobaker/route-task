import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './compontnts/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomerChartComponent } from './compontnts/customerChart/customer-chart/customer-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CustomerChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
