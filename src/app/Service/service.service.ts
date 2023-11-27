import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../Model/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url='http://localhost:8080/persona/';

  constructor(private http:HttpClient) { }

  getPersonas(){
    return this.http.get<Persona[]>(this.Url + 'listar');
  }
}
