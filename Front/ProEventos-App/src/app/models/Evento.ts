import { Lote } from "./Lote";
import { Palestrante } from "./Palestrante";
import { RedeSocial } from "./RedeSocial";

export interface Evento {
     id:number;  
     local:string;  
     dataEvento?:Date;  
     tema:string;  
     qtdPessoas:number;  
     imageURL:string;  
     telefone:number;  
     email:string;  
     lote: Lote[];  
     redeSociais: RedeSocial[];  
     palestranteEvento: Palestrante[];  
}
