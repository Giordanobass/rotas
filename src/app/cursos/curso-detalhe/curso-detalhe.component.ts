import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlHandlingStrategy } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.scss']
})
export class CursoDetalheComponent implements OnInit {

  id!: number;
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService) {
    //this.id = this.route.params
   // console.log(this.route.params)
  }

  ngOnInit(): void {
  this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id']

        this.curso = this.cursosService.getCurso(this.id)
        
        if(this.curso == null){
          this.router.navigate(['/cursos/naoEncontrado']);
        }
      }
    );
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
