import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule,FormControl,Validators,ReactiveFormsModule} from '@angular/forms'
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Persona } from '../../Model/Persona';


@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule,TableModule,FormsModule,ButtonModule, DialogModule, ReactiveFormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  formularioPersona : FormGroup
  personas : Persona[];
  visible : boolean

  constructor(fp:FormBuilder, private service : ServiceService, private router: Router){
    this.personas = [];
    this.visible = false
    this.formularioPersona = fp.group({
      dni : new FormControl('',[Validators.required]),
      nombre : new FormControl('',[Validators.required]),
      apellido : new FormControl('',[Validators.required]),
      telefono : new FormControl('',[Validators.required])
    })
  }

  ngOnInit(){
    this.service.getPersonas().subscribe((data : Persona[])=>{
      this.personas = data;
    })
  }  

  borrarPersona(dni : number){
    return this.service.deletePersona(dni).subscribe(data=>{
      this.getPersonas()
    })
  }

  paginaPrincipal(){
    this.router.navigate(['main'])
  }

  getPersonas(){
    this.service.getPersonas().subscribe((data : Persona[])=>{
      this.personas = data;
    })
  }

  activadorDialog(persona : Persona){
    this.formularioPersona.get('dni')?.setValue(persona.dni)
    this.formularioPersona.get('nombre')?.setValue(persona.nombre)
    this.formularioPersona.get('apellido')?.setValue(persona.apellido)
    this.formularioPersona.get('telefono')?.setValue(persona.telefono)
    this.visible = true
  }

  actualizarPersona(){
    if(this.formularioPersona.valid){
      let persona = new Persona()
      persona.dni = this.formularioPersona.get('dni')?.value
      persona.nombre = this.formularioPersona.get('nombre')?.value
      persona.apellido = this.formularioPersona.get('apellido')?.value
      persona.telefono = this.formularioPersona.get('telefono')?.value
      this.service.editPersona(persona).subscribe( data =>{
        this.formularioPersona.reset()
        this.getPersonas()
        this.visible = false
      })
    }
  }
}
