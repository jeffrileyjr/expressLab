import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  itemImages: any[] = [
    {
      id: 1,
      image: '../assets/noImage.png'
    },
    {
      id: 2,
      image: '../assets/noImage.png'
    },
    {
      id: 3,
      image: '../assets/noImage.png'
    },
    {
      id: 4,
      image: '../assets/noImage.png'
    },
    {
      id: 5,
      image: '../assets/noImage.png'
    },
    {
      id: 6,
      image: '../assets/noImage.png'
    }
  ];

  getImages() {
    return this.itemImages;
  } 

  getAllItems() {
    return this.http.get('/api/cart-items', { responseType: 'json'});
  }
  deleteItem(id) {
    return this.http.delete(`/api/cart-items/${id}`, { responseType: 'json'});
  }
  updateItem(item) {
    return this.http.put(`/api/cart-items/${item.id}`, item, { responseType: 'json'});
  }
  addItem(item) {
    return this.http.post('/api/cart-items', item, { responseType: 'json'});
  }
}
