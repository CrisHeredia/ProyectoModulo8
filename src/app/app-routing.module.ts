import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
//import { CompraComponent } from './compra/compra.component';

const routes: Routes = [
 { path: '', component: LoginComponent},
 { path: 'login', component: LoginComponent },
 { path: 'navegacion', component: BarraNavegacionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})

export class RoutesModule { }
