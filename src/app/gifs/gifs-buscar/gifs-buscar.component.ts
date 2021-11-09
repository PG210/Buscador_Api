import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-buscar',
  templateUrl: './gifs-buscar.component.html',
  styles: [
  ]
})
export class GifsBuscarComponent {
  //decorador para manipular un input y luego dejarlo en limpio
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  constructor(private gifservice: GifsService){
    //inyecta el servicio
  }
  
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;//captura el dato del input
    // console.log(valor);
     this.gifservice.buscarGifs(valor);//guarda el valor ingresado en el metodo del servicio
     this.txtBuscar.nativeElement.value=" ";
  }

}
