import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-carousel-view',
  templateUrl: './carousel-view.component.html',
  styleUrl: './carousel-view.component.scss',
  imports: [CommonModule],
  providers: [],
})
export class CarouselViewComponent {
  sections: CarouselSections[] = [
    {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem sed libero rutrum consectetur hendrerit nec lectus. Vivamus nec ornare ex, sed pretium neque. Integer nec dui rhoncus, fringilla libero vitae, aliquam neque. Integer sollicitudin nibh nec sollicitudin tempor. Cras.',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed condimentum dolor. Vestibulum a risus ac ex molestie pellentesque ut sed tortor. Vivamus neque.',
    },
    {
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, sem ullamcorper porta euismod, justo neque lacinia leo, et tempor.',
    },
    {
      title: 'Lorem ipsum',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed lorem sed libero rutrum consectetur hendrerit nec lectus. Vivamus nec ornare ex, sed pretium neque. Integer nec dui rhoncus, fringilla libero vitae, aliquam neque. Integer sollicitudin nibh nec sollicitudin tempor. Cras.',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed condimentum dolor. Vestibulum a risus ac ex molestie pellentesque ut sed tortor. Vivamus neque.',
    },
    {
      title: 'Lorem ipsum dolor',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquet, sem ullamcorper porta euismod, justo neque lacinia leo, et tempor.',
    },
  ];
}

interface CarouselSections {
  title: string;
  description: string;
}
