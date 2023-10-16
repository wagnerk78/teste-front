import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'produtos',
    loadChildren: () => import('./Components/produtos/produtos.module').then(m => m.ProdutosModule)
  },
  {
    path: 'produtos/cadastro',
    loadChildren: () => import('./Components/cadastro/cadastrar.module').then(m => m.CadastrarModule)
  },
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
