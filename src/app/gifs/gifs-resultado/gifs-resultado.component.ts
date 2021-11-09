import { Component} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-gifs-resultado',
  templateUrl: './gifs-resultado.component.html',
  styles: [
  ]
})
export class GifsResultadoComponent{
   
  constructor(private vari:GifsService){
    //inyecta el servicio
  }
  get resultado(){//llama al array resultado que guarda la busqueda de la api
    return this.vari.resultados;
  }
  
}
