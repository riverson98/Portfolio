import { Component } from '@angular/core';
import { SmallCardComponent } from "../small-card/small-card.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  
}