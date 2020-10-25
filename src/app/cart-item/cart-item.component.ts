import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input('passingItem')
  item: any;

  constructor(private router: Router) {
    console.log('Constructor Called');
  }

  ngOnInit() {
    console.log('CartItem Initialized');
  }

  selectItem(item: any) {
    item.isActive = true;
    // items/:id
    this.router.navigate(['items', item.name]);
  }

}
