import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  public itemsMenu=['umbrelOS', 'Umbrel Home', 'App Store', 'Community','Careers'];
  public isVisible = true;

}
