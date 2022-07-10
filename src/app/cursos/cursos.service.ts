import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos(){
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'}
    ]
   }

   getCurso(id: number){
    let cursos = this.getCursos();
    for (let index = 0; index < cursos.length; index++) {
      let curso = cursos[index];
      if(curso.id == id){
        return curso;
      }
    }
    return null;
   }
}
