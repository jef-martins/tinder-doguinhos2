import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricoComponent } from './doguitos/historico/historico.component';
import { HomeComponent } from './doguitos/home/home.component';

const routes: Routes = [{
  path:'', component: HomeComponent
},
{
  path:'historico', component: HistoricoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
