import { Component, OnInit } from '@angular/core';
import { CommonUtilService } from '../common-util.service';
import { DataItemService } from '../data-item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemList = [
    {
      name: 'Nokia 3220',
      brand: 'Nokia'
    },
    {
      name: 'Samsung 4454',
      brand: 'Samsung'
    },
    {
      name: 'Motorolla 4422',
      brand: 'Motorolla'
    },
    {
      name: 'C 100',
      brand: 'Samsung'
    },
    {
      name: 'Mobile 6600',
      brand: 'Nokia'
    }
  ];

  actualItemList = [...this.itemList];

  brands = [
    {
      name: 'Nokia',
      checked: false
    },
    {
      name: 'Samsung',
      checked: true
    },
    {
      name: 'Motorolla',
      checked: false
    },
    {
      name: 'Redmi',
      checked: false
    },
    {
      name: 'Realmi',
      checked: false
    }
  ];

  appliedBrand: Array<string>;

  constructor(private commonUtilService: CommonUtilService, private dataItemService: DataItemService) { }

  ngOnInit() {
    // Server call to get listof items
    this.dataItemService.getItemList()
      .subscribe(
        (data) => {
          this.itemList = data;
          console.log(data);
        },
        (error) => { },
        () => { }
      );
    this.itemList = this.itemList.map((b) => {
      b.name = this.commonUtilService.greet(b.name);
      return b;
    });
  }

  applyFilters(): void {
    // let brandList = [...this.brands].filter((b) => b.checked).map((b) => b.name);
    // this.itemList = brandList.length > 0 ? [...this.actualItemList].filter((item) => brandList.indexOf(item.brand) !== -1) : [...this.actualItemList];
    this.appliedBrand = [...this.brands].filter((b) => b.checked).map((b) => b.name);
  }

  resetFilters(): void {
    this.brands.forEach((b) => {
      b.checked = false;
    });
    this.appliedBrand = [];
  }

}
