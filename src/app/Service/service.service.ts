import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Model/Persona';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url='http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

  getPersonas(){
    return this.http.get<Persona[]>(this.Url + 'listar');
  }

  newPersonas(persona : Persona){
    return this.http.post<Persona>(this.Url + 'crear',persona,{
      observe:'response'
    })
  }

  editPersona(persona:Persona){
    return this.http.post<Persona>(this.Url + 'editar',persona,{
      observe: 'response'
    })
  }

  deletePersona(dni:number){
   return this.http.post<Boolean>(this.Url + 'borrar/' + dni,{
      observe : 'response'
    })
  }
}
