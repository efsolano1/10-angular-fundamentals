import { Component } from '@angular/core';
import { MainImageComponent } from '../main-image/main-image.component';
import { ContainerImagesComponent } from '../container-images/container-images.component';
import { SliderComponent } from '../slider/slider.component';
import { BackgroundHeaderComponent } from '../background-header/background-header.component';
import { BackgroundContentComponent } from '../background-content/background-content.component';
import { BackgroundFooterComponent } from '../background-footer/background-footer.component';

@Component({
  selector: 'app-main-section',
  imports: [
    MainImageComponent,
    ContainerImagesComponent,
    SliderComponent,
    BackgroundHeaderComponent,
    BackgroundContentComponent,
    BackgroundFooterComponent,
  ],
  standalone: true,
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss',
})
export class MainSectionComponent {
  public sectionImage1 = 1;
  public sectionImage2 = 2;
}
