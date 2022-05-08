import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/services/auth.guard';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'game',
    loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
