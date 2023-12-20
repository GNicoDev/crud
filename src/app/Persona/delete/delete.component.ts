import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [CommonModule,ButtonModule,ReactiveFormsModule,InputTextModule, CheckboxModule, RadioButtonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  formularioBorrar : FormGroup
  numDni : number
  constructor(private fb : FormBuilder ,private service : ServiceService, private router : Router){
      this.numDni = 0;
      this.formularioBorrar = fb.group({
        dni : new FormControl('',[Validators.required])
      })
  }

  borrarPersona(){
    if(this.formularioBorrar.valid){
      this.numDni = this.formularioBorrar.get('dni')?.value
      this.service.deletePersona(this.numDni).subscribe(data=>{
        this.router.navigate(['listar'])
      })
    }
  }

  paginaPrincipal(){
    this.router.navigate(['main'])
  }
}
