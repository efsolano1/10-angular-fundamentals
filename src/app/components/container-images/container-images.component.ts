import { Component, input } from '@angular/core';

@Component({
  selector: 'app-container-images',
  imports: [],
  standalone:true,
  templateUrl: './container-images.component.html',
  styleUrl: './container-images.component.scss'
})
export class ContainerImagesComponent {
  public opciones = input<number>();

}
