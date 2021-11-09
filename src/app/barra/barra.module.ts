import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';



@NgModule({
  declarations: [
    BarraMenuComponent
  ],
  exports:[
    BarraMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BarraModule { }
