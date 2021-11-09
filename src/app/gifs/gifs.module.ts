import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { GifsBuscarComponent } from './gifs-buscar/gifs-buscar.component';
import { GifsResultadoComponent } from './gifs-resultado/gifs-resultado.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    GifsBuscarComponent,
    GifsResultadoComponent
  ],
  exports:[
    GifsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
