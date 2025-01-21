import { Component, input, output } from '@angular/core';
interface FooterCard {
  title: string;
  description: string;
  linkAriaLabel: string;
  iconPath: string;
}

interface SocialLink {
  ariaLabel: string;
  iconPath: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  public footerItems = input<string[]>();
  public onClick = output<string>();

  public footerCards = input<FooterCard[]>([
    {
      title: 'Community',
      description:
        'A place to get your questions answered, and to connect with fellow sovereign individuals.',
      linkAriaLabel: 'Go to Community',
      iconPath:
        'M 16.216 6.416 L 6.923 15.583 M 16.216 6.416 L 7.852 6.416 M 16.216 6.416 L 16.216 14.666',
    },
    {
      title: 'Support',
      description:
        'Get help with installing and troubleshooting UmbrelOS and Umbrel Home.',
      linkAriaLabel: 'Go to Support',
      iconPath:
        'M 16.216 6.416 L 6.923 15.583 M 16.216 6.416 L 7.852 6.416 M 16.216 6.416 L 16.216 14.666',
    },
    {
      title: 'Careers',
      description:
        "We're hiring! Join us and shape the future of Umbrel. We are waiting for you",
      linkAriaLabel: 'Go to Careers',
      iconPath:
        'M 16.216 6.416 L 6.923 15.583 M 16.216 6.416 L 7.852 6.416 M 16.216 6.416 L 16.216 14.666',
    },
  ]);

  public socialLinks = input<SocialLink[]>([
    {
      ariaLabel: 'Twitter',
      iconPath:
        'M5.026 15c6.036 0 9.345-5.02 9.345-9.35 0-.14 0-.28-.01-.42A6.69 6.69 0 0 0 16 3.29a6.56 6.56 0 0 1-1.889.518A3.289 3.289 0 0 0 15.557.1a6.567 6.567 0 0 1-2.087.797 3.28 3.28 0 0 0-5.595 2.99 9.322 9.322 0 0 1-6.762-3.424 3.282 3.282 0 0 0 1.016 4.384A3.285 3.285 0 0 1 .64 7.77v.04a3.28 3.28 0 0 0 2.63 3.216 3.283 3.283 0 0 1-1.485.056 3.281 3.281 0 0 0 3.063 2.28A6.577 6.577 0 0 1 0 13.89a9.331 9.331 0 0 0 5.026 1.48',
      href: '#',
    },
    {
      ariaLabel: 'Discord',
      iconPath:
        'M19 3H5c-1.1 0-1.99.9-1.99 2L3 17c0 1.1.89 2 1.99 2h14c1.1 0 1.99-.9 1.99-2L21 5c0-1.1-.89-2-1.99-2zM5 5h14c.55 0 1 .45 1 1v1h-2V6h-3v1h-2V6H8v1H6V6c0-.55.45-1 1-1zm0 14V9h14v10H5z',
      href: '#',
    },
    {
      ariaLabel: 'GitHub',
      iconPath:
        'M8 0C3.58 0 0 3.58 0 8c0 3.53 2.29 6.53 5.47 7.59.4.08.55-.17.55-.37 0-.18-.01-.74-.02-1.33-2.22.48-2.68-.73-2.68-.73-.36-.91-.87-1.16-.87-1.16-.71-.48.05-.47.05-.47.78.05 1.19.79 1.19.79.7 1.18 1.84.84 2.28.64.07-.51.27-.84.5-1.03-1.77-.2-3.64-.89-3.64-3.97 0-.88.31-1.6.82-2.17-.08-.2-.36-1.03.08-2.12 0 0 .68-.22 2.22.84.64-.18 1.32-.27 1.99-.27s1.35.09 1.99.27c1.54-1.06 2.22-.84 2.22-.84.44 1.09.16 1.92.08 2.12.51.57.82 1.29.82 2.17 0 3.08-1.87 3.77-3.64 3.97.28.24.53.72.53 1.44 0 1.04-.01 1.88-.02 2.13 0 .2.15.46.55.37 3.18-1.06 5.47-4.06 5.47-7.59 0-4.42-3.58-8-8-8z',
      href: '#',
    },
  ]);
  handleClick(item: string): void {
    this.onClick.emit(item);
  }
}
