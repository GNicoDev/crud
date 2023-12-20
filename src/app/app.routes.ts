import { Routes } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AppComponent } from './app.component';
import { MainComponent } from './Persona/main/main.component';
import { DeleteComponent } from './Persona/delete/delete.component';

export const routes: Routes = [
    {path : 'listar', component: ListarComponent},
    {path : 'add', component : AddComponent},
    {path : 'edit',component: EditComponent},
    {path : 'main', component : MainComponent},
    {path : 'delete', component: DeleteComponent}
];
