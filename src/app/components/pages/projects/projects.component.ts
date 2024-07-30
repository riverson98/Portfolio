import { Component, OnInit } from '@angular/core';
import { BigCardComponent } from "../../big-card/big-card.component";
import { ProjectModel } from '../../../models/project.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [BigCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  
  projects:ProjectModel[] = [];

  ngOnInit(): void {
    this.projects.push(
      new ProjectModel('RRSolucoesAuth',
        'API of authentication that uses jwt tokens to authenticate users also uses roles to manage permissions. It uses clean arch, solid conceits, entity framework and .NET 8',
        'assets/jwtApi-Swagger.png',
        'https://github.com/riverson98/RRSolucoesAuth'),

      new ProjectModel('Customer-Base',
        'API to create any services made with Java 17 and spring-boot and mysql database',
        'assets/customerBase.png',
        'https://github.com/riverson98/Customers-Base'),
        
      new ProjectModel('Portfolio',
        'Portfolio to apresent me and my skills made with angular 17',
        'assets/portfolio.png',
        'https://github.com/riverson98/Portfolio'
      )   
     )
  }
}
