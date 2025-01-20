import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public footerItems = input<string[]>();
  public onClick = output<string>();

  handleClick(item: string):void{
    this.onClick.emit(item);
  }
}
