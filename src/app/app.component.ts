import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [HeaderComponent, MainSectionComponent, FooterComponent],
})
export class AppComponent {
  title = 'Project Umbrella';
  titleFooter = [
    'Launch your app',
    'Community',
    'Careers',
    'Blog',
    'Support',
    'Legal',
  ];

  handleClick(item: string) {
    console.log(item);
  }
}
