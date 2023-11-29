import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() titulo: string | undefined;
  @Input() subtitulo = 'Desde 2021';
  @Input() iconClass = 'fa fa-user';
  @Input() botaoListar = false;
  ngOnInit() {
  }
  

  listar():void{
    this.router.navigate([`/${this.titulo?.toLocaleLowerCase()}/listar`]);
  }
}
