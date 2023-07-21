import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor ( private http: HttpClient) {}
  ngOnInit(): void {
      this.getDataFromAPI();
  }
  getDataFromAPI(): void {
    const url = 'https://dummyjson.com/products';
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
    });
  }
}
