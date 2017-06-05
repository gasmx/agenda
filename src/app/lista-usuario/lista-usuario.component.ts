import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';
import { ContatoModel } from '../modelos/contato-model';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaDeContatos: Array<ContatoModel> = [];
  @Output() idClicado = new EventEmitter();

  constructor(private databaseService: ContatosDataBaseService) { }

  ngOnInit() {
    this.databaseService.enviarContato.subscribe(contatos => this.listaDeContatos = contatos);
  }

  contatoClicado(item: number) : void {
    this.idClicado.emit(item);
  }
}
