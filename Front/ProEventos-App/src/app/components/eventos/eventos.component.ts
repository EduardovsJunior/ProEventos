import { Component, OnInit, TemplateRef } from '@angular/core';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/Evento';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
   
  modalRef?: BsModalRef;
  public eventos: Evento[] =[];
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
    this.eventoService.getEvento().subscribe({
      next: (eventos: Evento[])=> {
        this.eventos = eventos;
        this.eventosFiltrados= eventos;
      },
      error: (error: any)=> {
        this.spinner.hide();
        this.toastr.error("Erro ao carregar os eventos", "Erro");
      },

      complete: ()=> this.spinner.hide() });}

  public filtrarEventos(filtraPor:string):any{
    filtraPor=filtraPor.toLowerCase();
    return this.eventos.filter(
      (evento:any) =>evento.tema.toLocaleLowerCase().indexOf(filtraPor)!==-1 ||
          evento.local.toLocaleLowerCase().indexOf(filtraPor)!==-1 
    )
  }
  constructor(
    private eventoService: EventoService, 
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService
    ) { }

  public alterarImagem(): void{
    this.exibirImagem = !this.exibirImagem;
  }
  public ngOnInit() {
    this.getEventos();

     this.spinner.show();

    setTimeout(() => {
    
    }, 5000);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
 
  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('O evento foi deletado com sucesso!', 'Deletado');
  }
 
  decline(): void {
    this.modalRef?.hide();
  }


}
