import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'elements',loadChildren: () => import('./elements/elements.module').then(e => e.ElementsModule)},
  {path:'collections',loadChildren: () => import('./collections/collections.module').then(e => e.CollectionsModule)},
  {path:'views',loadChildren: () => import('./views/views.module').then(e => e.ViewsModule)},
  {path:'modules',loadChildren: () => import('./modules/modules.module').then(e => e.ModulesModule)},

  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
