import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { 
        path: '', component: HomeComponent , canActivate: [AuthGuard]
    },
    { 
        path: 'login', component: LoginComponent 
    },
    {
        path: 'cursos',
        loadChildren: () => import('../app/cursos/cursos.module').then(m => m.CursosModule),
        canActivate: [AuthGuard], canActivateChild: [CursosGuard], canLoad: [AuthGuard]
    },
    {
        path: 'alunos',
        loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard], canLoad: [AuthGuard]
    },
    {
        path: '', redirectTo:'/home', pathMatch: 'full'
    },
    {
        path: '**', component: PaginaNaoEncontradaComponent, canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }