import { Component, input } from '@angular/core';

@Component({
  selector: 'app-main-image',
  imports: [],
  standalone: true,
  templateUrl: './main-image.component.html',
  styleUrl: './main-image.component.scss',
})
export class MainImageComponent {
  public lista = input<number>();
}
