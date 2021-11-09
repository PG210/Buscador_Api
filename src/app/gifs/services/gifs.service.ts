import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifs } from 'src/app/interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  //declaro la llave de la Api
  private api_key: string ='37y6pjr0wlkKIvD0yV7C3FRmNGGuQO19';
  //declaro la url de la api
  private urlApi: string='https://api.giphy.com/v1/gifs';
  //constructor() { }
  private _historial:string[]=[]; //declaramos un array para guardar las busqueda

  public resultados:Gif[]=[];//aqui llega la respuesta de la api

  get historial(){//retorna la informacion del array
    return [...this._historial];
  }

   //instanciamos el http
   constructor(private http: HttpClient){ 
     //guarda el historial y le asigna a la variable de salida
   
     this._historial=JSON.parse(localStorage.getItem('_historial')!) || [];
     this.resultados=JSON.parse(localStorage.getItem('resultados')!) || [];
    

   }

  buscarGifs(res:string){
    if(res.trim().length!=0){
      res=res.trim().toLocaleLowerCase();
      this._historial.unshift(res);//inserta el valor de busqueda en la posicion 1.
      this._historial=this._historial.splice(0,10);//solamente se limita a 10 campos
     localStorage.setItem('_historial',JSON.stringify(this._historial));//para guardar el historial de busqueda
      console.log(this._historial);
    }

    const params = new HttpParams()
    .set('api_key', this.api_key)
    .set('q', res)
    .set('limit', '10');
     //instanciamos la api
     //SearchGifs es de tipo de la interface 
    this.http.get<SearchGifs>(`${this.urlApi}/search?`, {params})
    .subscribe((res)=>{
      console.log(res.data);
      this.resultados=res.data;//almacenar en el array
      localStorage.setItem('resultados',JSON.stringify(this.resultados));//para guardar las imagenes de busqueda
    })
  }

 
}
