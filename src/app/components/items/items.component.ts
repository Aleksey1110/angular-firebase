import { Item } from './../../models/item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

items: Item[];
editState: Boolean = false;
itemToEdit: Item;

  constructor(private _itemService: ItemService) { }

  ngOnInit() {
    this._itemService.getItems()
      .subscribe(items => {
        this.items = items;
      });
  }

  deleteItem(event, item: Item) {
    this.clearState();
    this._itemService.deleteItem(item);
  }

  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }

  updateItem(item: Item) {
    this._itemService.updateItem(item);
    this.clearState();
  }

}
