import { Component, OnInit } from '@angular/core';
import { SmallCardComponent } from "../../small-card/small-card.component";
import { SkillModel } from '../../../models/skill.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SmallCardComponent, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  
  skills: SkillModel[] = [];

  ngOnInit(): void {
    
    this.skills.push(
      new SkillModel('.NET',
        ['Entity Framework', 'Web Api', 'ASP.NET'],
        'dotnet.png'),

      new SkillModel('Java',
        ['Spring-boot', 'Web-flux', 'Quarkus', 'Hibernate'],
        'java.png',
        ),
        
      new SkillModel('Nest',
        ['Prisma', 'Web Api'],
        'nestjs.png',
      ),

      new SkillModel('Angular',
        ['Directives', 'Routes', 'Components', 'Pipes'],
        'angular.png',
      ),
      
      new SkillModel('MySQL',
        [],
        'mysql.png',
      ),     

      new SkillModel('S.O.L.I.D',
        ['Single responsibility', 'Open/closed',
          'Liskov substitution', 'Interface segregation',
          'Dependency Inversion'],
        'solid.png',
      ),
      
      new SkillModel('Clean arch',
        ['Presentation', 'Application', 'Infrasctructure','Domain'],
        'cleanarch.png',
      ),
      
      new SkillModel('Docker',
        ['Docker file', 'Docker compose', 'Docker swarm'],
        'docker.png',
      ),
     )
  }
  
}