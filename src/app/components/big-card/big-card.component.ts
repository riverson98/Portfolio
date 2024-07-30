import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.scss'
})
export class BigCardComponent {
  @Input({alias: 'projectTitle', required:true}) title:string = '';
  @Input({alias: 'projectDescription', required:true}) description:string = '';
  @Input({alias: 'imagePath', required:true}) imagePath = '';
  @Input({alias: 'projectLink', required:true}) projectLink = '';
}
