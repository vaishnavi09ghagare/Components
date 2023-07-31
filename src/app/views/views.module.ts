import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewshomeComponent } from './viewshome/viewshome.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemlistComponent } from './itemlist/itemlist.component';


@NgModule({
  declarations: [
    ViewshomeComponent,
    StatisticsComponent,
    ItemlistComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ],
  exports:[
    
  ]
})
export class ViewsModule { }
