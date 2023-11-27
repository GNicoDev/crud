import { Routes } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';

export const routes: Routes = [
    {path : 'listar', component: ListarComponent},
    {path : 'add', component : AddComponent},
    {path : 'edit',component: EditComponent}
];
