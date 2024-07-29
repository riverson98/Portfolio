import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss'
})
export class SmallCardComponent {
  @Input({alias: 'text', required: true}) text:string = '';

  @Input({alias: 'description'}) descriptions:string[] = [];

  @Input({alias: 'imagePath', required: true}) imagePath:string = '';
}
