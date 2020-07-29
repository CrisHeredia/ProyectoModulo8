import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [
 { path: '', component: LoginComponent},
 { path: 'login', component: LoginComponent },
 { path: 'navegacion', component: BarraNavegacionComponent, children:[
   { path: 'catalogo', component: CatalogoComponent },
   { path: 'carrito', component: CarritoComponent },
   { path: 'producto/:nombre/:imagen/:precio/:cantidad', component: ProductoComponent },
 ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  declarations: []
})

export class RoutesModule { }
