import { Component} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styles: [
  ]
})
export class GifsPageComponent{
  
  constructor(private vari:GifsService){
    //inyecta el servicio
  }
  
  get historia(){
    var d= this.vari.historial;
    return d;
  }
 buscarHistorial(his:string){
  //console.log(his);
  this.vari.buscarGifs(his);
 //return c;
  
 }

}
