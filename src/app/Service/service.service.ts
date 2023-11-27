import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Model/Persona';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url='http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    let persona: Persona[] = [{
      dni: 123, 
      nombre: "Soy capo", 
      apellido: "Que easy es esto",
      telefono: "el numero 1"
  }]
    return from([persona])
    //return this.http.get<Persona[]>(this.Url + 'listar');
  }
}
