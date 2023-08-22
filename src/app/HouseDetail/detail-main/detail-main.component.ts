import { Component } from '@angular/core';
import { ApiService } from 'src/core/services/api/api.service';
import { Router } from "@angular/router";
import { House } from 'src/core/models/house.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-main',
  templateUrl: './detail-main.component.html',
  styleUrls: ['./detail-main.component.scss']
})
export class DetailMainComponent {
   constructor(private route: ActivatedRoute,private readonly apiService: ApiService, 
  private router: Router) { }
  changeImage(thumbnail: HTMLImageElement): void {
    const mainImage = document.getElementById("main_product_image") as HTMLImageElement;
    mainImage.src = thumbnail.src;
 
  }

  houses: House[] = [];

  house: House | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const houseId = +params['id']; // Convert the parameter to a number (assuming house IDs are numbers)
      this.getHouseDetail(houseId);
    });
  }

  getHouseDetail(houseId: number) {
    this.apiService.getEntityById<House>(houseId, House).then(
      (response: any) => {
        this.house = response.data;
        console.log(this.house);
        this.refresh();
      },
      (error: any) => {
        // Handle error if necessary
        console.error(error);
      }
    );
  }


//bu kod bize evlerin ekrana gelmesini sağlayan kod yapısı...
  refresh() {
    this.apiService.getAllEntities(House).subscribe((response) => {
      this.houses = response.data;
      console.log(this.houses)
    });
  }



}
