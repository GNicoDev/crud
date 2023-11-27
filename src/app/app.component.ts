import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonModule,FormsModule,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'crud';

  constructor(private router:Router){}
  Listar(){
    this.router.navigate(["listar"])
  }

  Nuevo(){
    this.router.navigate(["add"])
  }
}
