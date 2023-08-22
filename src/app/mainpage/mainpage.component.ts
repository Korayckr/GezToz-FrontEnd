import { Component } from '@angular/core';
import { ApiService } from "../../core/services/api/api.service";
import { Router } from "@angular/router";
import { House } from 'src/core/models/house.model';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent {
  constructor(private readonly apiService: ApiService, 
    private router: Router) { }

  houses: House[] = [];
  ngOnInit() {
    this.refresh()
  }
//bu kod bize evlerin ekrana gelmesini sağlayan kod yapısı...
  refresh() {
    this.apiService.getAllEntities(House).subscribe((response) => {
      this.houses = response.data;
      console.log(this.houses)
    });
}
}
