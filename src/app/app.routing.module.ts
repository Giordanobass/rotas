import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

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
        canActivate: [AuthGuard]
    },
    {
        path: 'alunos',
        loadChildren: () => import('../app/alunos/alunos.module').then(m => m.AlunosModule),
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }