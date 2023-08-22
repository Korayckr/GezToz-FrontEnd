import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  arama = {
    isim: '',
    sehir: '',
  };

  constructor(private router: Router) {}

  submitAramaFormu(): void {
    // Arama verilerini URL'ye ekleyerek evler sayfasına yönlendirin
    const queryParams: any = {};
    if (this.arama.isim) {
      queryParams.isim = this.arama.isim;
    }
    if (this.arama.sehir) {
      queryParams.sehir = this.arama.sehir;
    }

    this.router.navigate(['/Kirala'], { queryParams: queryParams });
  }


  
  

}
