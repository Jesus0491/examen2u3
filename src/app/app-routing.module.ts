import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactosComponent} from './componentes/contactos/contactos.component';
import { RegistroComponent } from './componentes/registro/registro.component';


const routes: Routes = [
  {path:'contactos',component:ContactosComponent},
  {path: 'registro',component:RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
