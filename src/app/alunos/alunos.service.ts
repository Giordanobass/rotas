import { Injectable } from '@angular/core';
import { AlunoModel } from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: AlunoModel[] = [
    { id: 1, nome: 'Aluno 01', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno 02', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno 03', email: 'aluno03@email.com' }
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for(let i=0; i<this.alunos.length; i++){
      let aluno = this.alunos[i];
      console.log('alunos service')
      console.log(aluno.id)
      if(aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
