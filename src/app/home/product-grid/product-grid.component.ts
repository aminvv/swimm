declare global {
  interface Window {
    kofiWidgetOverlay: any;
  }
}

import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements AfterViewInit {

  products = [
    {
      img: 'https://ik.imagekit.io/9tnlivadc/cylinder%20-2.png?updatedAt=1757666129749',
      brand: 'Brand 1',
      name: 'Product 1',
      price: '$149',
      oldPrice: '$199',
      link: '#'
    },
    {
      img: 'https://ik.imagekit.io/9tnlivadc/images.jpeg?updatedAt=1757764779742',
      brand: 'Brand 2',
      name: 'Product 2',
      price: '$129',
      oldPrice: '$179',
      link: '#'
    },
    {
      img: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand 3',
      name: 'Product 3',
      price: '$99',
      oldPrice: '$149',
      link: '#'
    },
    {
      img: 'https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand 1',
      name: 'Product 1',
      price: '$149',
      oldPrice: '$199',
      link: '#'
    },
    {
      img: 'https://images.unsplash.com/photo-1651950519238-15835722f8bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand 2',
      name: 'Product 2',
      price: '$129',
      oldPrice: '$179',
      link: '#'
    },
    {
      img: 'https://images.unsplash.com/photo-1651950537598-373e4358d320?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      brand: 'Brand 3',
      name: 'Product 3',
      price: '$99',
      oldPrice: '$149',
      link: '#'
    }
  ];

  ngAfterViewInit(): void {
    if (window.kofiWidgetOverlay) {
      window.kofiWidgetOverlay.draw('mohamedghulam', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#323842',
        'floating-chat.donateButton.text-color': '#fff'
      });
    }
  }
}
