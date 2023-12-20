import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router, RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonModule,FormsModule,HttpClientModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  
    constructor(private router:Router){}
    Listar(){
      this.router.navigate(["listar"])
    }
  
    Nuevo(){
      this.router.navigate(["add"])
    }

    Borrar(){
      this.router.navigate(['delete'])
    }
}
