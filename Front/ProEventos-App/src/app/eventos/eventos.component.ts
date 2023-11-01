import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
   
  public eventos: any =[];
  larguraImagem: number = 150;
  margemImagem: number = 2;
  exibirImagem: boolean = true;
  private _filtroLista: string = '';
  public eventosFiltrados: any;

  public get filtroLista():string{return this._filtroLista;}

  public set  filtroLista(value:string){
    this._filtroLista= value;
    this.eventosFiltrados= this.filtroLista? this.filtrarEventos(this._filtroLista): this.eventos;
  }

  public getEventos(): void{
    this.http.get('https://localhost:5001/api/Evento').subscribe(
      response=>{
         this.eventos = response;
         this.eventosFiltrados = this.eventos;
      },
      error=>console.log(error),
      
    );
   
  }

  filtrarEventos(filtraPor:string):any{
    filtraPor=filtraPor.toLowerCase();
    return this.eventos.filter(
      (evento:any) =>evento.tema.toLocaleLowerCase().indexOf(filtraPor)!==-1 ||
          evento.local.toLocaleLowerCase().indexOf(filtraPor)!==-1 
    )
  }
  constructor(private http:HttpClient) { }
  alterarImagem(){
    this.exibirImagem = !this.exibirImagem;
  }
  ngOnInit() {
    this.getEventos();
  }

}
