import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmchartsComponent } from './amcharts/amcharts.component';
// import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: '', redirectTo: 'ams', pathMatch: 'full' },
  {path: 'ams', component: AmchartsComponent},
  // {path: 'stock', component: StockComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
