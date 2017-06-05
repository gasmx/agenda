import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';
import { ContatosDataBaseService } from '../servicos/contatos-data-base.service';

@Component({
  selector: 'app-dados-usuario',
  templateUrl: './dados-usuario.component.html',
  styleUrls: ['./dados-usuario.component.css']
})
export class DadosUsuarioComponent implements OnInit {

  enviado: boolean = false;

  _nome: string;
  _telefone: string;
  _email: string;
  _tipo: string;

  tipos: Array<string> = [
    'Particular',
    'Trabalho',
    'Amigos',
    'Família'
  ];

  constructor(private databaseService: ContatosDataBaseService) { }

  ngOnInit() { }

  enviarDados(): void {
    if (this._tipo == undefined) {
      this._tipo = this.tipos[0];
    }

    let novoContato = new ContatoModel(this._nome, this._telefone, this._email, this._tipo);

    this.databaseService.setContato(novoContato);
    this.enviado = !this.enviado;
  }

  voltar(): void {
    this._nome = '';
    this._telefone = '';
    this._email = '';
    this._tipo = '';
    this.enviado = !this.enviado;
  }
}
