import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModshomeComponent } from './modshome/modshome.component';
import { ModalComponent } from './modal/modal.component';
import { AccordianComponent } from './accordian/accordian.component';


@NgModule({
  declarations: [
    ModshomeComponent,
    ModalComponent,
    AccordianComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
