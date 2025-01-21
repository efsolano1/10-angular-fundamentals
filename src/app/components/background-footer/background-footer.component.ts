import { Component } from '@angular/core';

interface Icon {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-background-footer',
  imports: [],
  templateUrl: './background-footer.component.html',
  styleUrl: './background-footer.component.scss',
})
export class BackgroundFooterComponent {
  public icons: Icon[] = [
    { src: './images/icons/gafas.avif', alt: 'Imagen ave con gafas' },
    { src: './images/icons/bitcoin.avif', alt: 'Imagen de Bitcoin' },
    { src: './images/icons/flash.avif', alt: 'Imagen de Flash' },
    { src: './images/icons/torq.png', alt: 'Imagen de Torq' },
    { src: './images/icons/plex4.png', alt: 'Imagen de Plex' },
    { src: './images/icons/samourai.jpg', alt: 'Imagen de Samourai' },
    {
      src: './images/icons/simpleTorrent.svg',
      alt: 'Imagen de Simple Torrent',
    },
    { src: './images/icons/ghosfosio.png', alt: 'Imagen de Goshfosio' },
    { src: './images/icons/shell.jpg', alt: 'Imagen de Shell' },
    { src: './images/icons/ghostrider.jpg', alt: 'Imagen de ghostrider' },
  ];

  public repeatedIcons: Icon[] = [
    ...this.icons.slice(0, this.icons.length),
    ...this.icons.slice(0, this.icons.length - 2),
    ...this.icons.slice(0, this.icons.length - 2),
    ...this.icons.slice(0, this.icons.length - 4),
  ];
}
