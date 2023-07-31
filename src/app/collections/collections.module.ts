import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionhomeComponent } from './collectionhome/collectionhome.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { BiographyComponent } from './biography/biography.component';
import { PartnersComponent } from './partners/partners.component';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
    CollectionhomeComponent,
    TableComponent,
    TabsComponent,
    BiographyComponent,
    PartnersComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  exports:[
    
  ]
})
export class CollectionsModule { }
