import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'shopping-cart';

  selectedItem: any;

  itemList = [
    {
      name: 'Nokia',
      webLink: 'nokia',
      isVisible: true,
      imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41uLb0h1P1L.jpg'
    },
    {
      name: 'Samsung',
      webLink: 'samsung',
      isVisible: true,
      imgUrl: 'https://www.sathya.in/Media/Default/Thumbs/0005/0005794-samsung-mobile-b313e.jpg'
    }
  ];

  doThis(): void {
    this.title = 'My Shopping Cart';
  }

  getInfo(item: any): void {

  }

  selectItem(item: any): void {
    if (this.selectedItem != null) {
      this.selectedItem.isSelected = false;
    }
    item.isSelected = true;
    this.selectedItem = item;
  }

}
