import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
    },
    {
      name: 'Samsung',
      webLink: 'samsung',
      isVisible: true,
      imgUrl: 'https://www.sathya.in/Media/Default/Thumbs/0005/0005794-samsung-mobile-b313e.jpg'
    },
    {
      name: 'Samsung',
      webLink: 'samsung',
      isVisible: true,
      imgUrl: 'https://www.sathya.in/Media/Default/Thumbs/0005/0005794-samsung-mobile-b313e.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
    // Server call to get listof items
  }

}
