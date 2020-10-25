import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input('passingItem')
  item: any;

  constructor() {
    console.log('Constructor Called');
  }

  ngOnInit() {
    console.log('CartItem Initialized');
  }

}
