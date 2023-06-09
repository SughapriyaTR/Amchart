import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmchartsComponent } from './amcharts/amcharts.component';
import { StockComponent } from './stock/stock.component';
import { SampleTestComponent } from './sample-test/sample-test.component';

@NgModule({
  declarations: [
    AppComponent,
    AmchartsComponent,
    StockComponent,
    SampleTestComponent
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
