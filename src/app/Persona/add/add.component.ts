import { Component, OnInit } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';


import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Persona } from '../../Model/Persona';
import { ServiceService } from '../../Service/service.service';
import { ListarComponent } from '../listar/listar.component';
import { AppComponent } from '../../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [CommonModule,InputTextModule,CheckboxModule,RadioButtonModule,FormsModule,ListarComponent,
  HttpClientModule,ButtonModule,ReactiveFormsModule, AppComponent],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent{
  formularioPersona : FormGroup
  sucessRegistro : number
  btnSuccesDisable : boolean

  constructor(private fb:FormBuilder, private service:ServiceService,private router:Router){
    this.btnSuccesDisable = false
    this.sucessRegistro = 0
    this.formularioPersona = fb.group({
      dni : new FormControl('',[Validators.required]),
      nombre : new FormControl('',[Validators.required]),
      apellido : new FormControl('',[Validators.required]),
      telefono : new FormControl('',[Validators.required])
    })
  }

  crearPersona() {
    if(this.formularioPersona.valid){
      this.sucessRegistro = 1
      this.btnSuccesDisable = true
      let persona = new Persona()
      persona.dni = this.formularioPersona.get('dni')?.value
      persona.nombre = this.formularioPersona.get('nombre')?.value
      persona.apellido = this.formularioPersona.get('apellido')?.value
      persona.telefono = this.formularioPersona.get('telefono')?.value
      this.service.newPersonas(persona).subscribe( data =>{
        this.formularioPersona.reset()
      })
    }else {
      this.sucessRegistro=2
    }
  }

  returnMainPage(){
    this.btnSuccesDisable = !this.btnSuccesDisable
    this.router.navigateByUrl('main')
  }

  cleanPage(){
    this.formularioPersona.reset()
    this.btnSuccesDisable = !this.btnSuccesDisable
  }
}
