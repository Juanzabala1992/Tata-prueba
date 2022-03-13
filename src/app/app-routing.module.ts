import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './Components/formulario/formulario.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { PrincipalComponent } from './Components/principal/principal.component';

const routes: Routes = [
{
  path:'', redirectTo:'home', pathMatch:'full'  
},
{
  path:'home',
  component:PrincipalComponent
},
{ path:'**',
  component:PageNotFoundComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
