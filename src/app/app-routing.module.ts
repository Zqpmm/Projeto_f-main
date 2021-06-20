import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPecasComponent } from './pecas/editar-pecas/editar-pecas.component';
import { SistemaPecasComponent } from './pecas/sistema-pecas/sistema-pecas.component';
import { ListarPecasComponent } from './pecas/listar-pecas/listar-pecas.component';
import { CadastroPecasComponent } from './pecas/cadastro-pecas/cadastro-pecas.component';

const routes: Routes = [
  {path:"listar", component:ListarPecasComponent},
  {path:"", component:SistemaPecasComponent},
  {path:"cadastro", component:CadastroPecasComponent},
  {path:"editar/:cod", component:EditarPecasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
