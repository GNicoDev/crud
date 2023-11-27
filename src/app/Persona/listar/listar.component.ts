import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
import { TableModule } from 'primeng/table';
import { ServiceService } from '../../Service/service.service';
import { Router } from '@angular/router';
import { Persona } from '../../Model/Persona';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [CommonModule,TableModule,FormsModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {

  personas: Array<Persona>;
  constructor(private service : ServiceService){
    this.personas = new Array<Persona>();
  }

  ngOnInit(){
    this.service.getPersonas().subscribe(data=>{
      this.personas = data;
    })
  }  
}
