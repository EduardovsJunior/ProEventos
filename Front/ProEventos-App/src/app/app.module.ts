import { CUSTOM_ELEMENTS_SCHEMA, NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PalestrantesComponent } from './components/palestrantes/palestrantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './shared/nav/nav.component';
import {TitleComponent} from "./shared/title/title.component"

import { CollapseModule } from 'ngx-bootstrap/collapse';
import { FormsModule } from '@angular/forms';
import { DateTimeFormatePipe } from './helpers/DateTimeFormate.pipe';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ContatosComponent } from './components/contatos/contatos.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PerfilComponent } from './components/perfil/perfil.component';



@NgModule({
  declarations: [			
    AppComponent,
      EventosComponent,
      PalestrantesComponent,
      NavComponent,
      DateTimeFormatePipe,
      TitleComponent,
      ContatosComponent,
      DashboardComponent,
      PerfilComponent
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    FormsModule,
    TooltipModule,
    BsDropdownModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot({
    timeOut: 5000,
    positionClass: 'toast-bottom-right',
    preventDuplicates: true,
    progressBar: true
    }),
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
