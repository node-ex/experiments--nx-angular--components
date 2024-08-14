import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  imports: [CommonModule],
  providers: [],
})
export class CarouselViewComponent {}
