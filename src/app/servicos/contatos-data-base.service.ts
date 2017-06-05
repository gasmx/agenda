import { EventEmitter, Output, Injectable } from '@angular/core';
import { ContatoModel } from '../modelos/contato-model';

@Injectable()
export class ContatosDataBaseService {

  meusContatos: Array<ContatoModel> = [];
  @Output() enviarContato = new EventEmitter();

  constructor() { }

  setContato(novoContato: ContatoModel): void {
    this.meusContatos.push(novoContato);
    this.enviarContato.emit(this.meusContatos);
  }

  getContato(id: number): ContatoModel {
    let contato: ContatoModel;
    return this.meusContatos[id]
  }
}
