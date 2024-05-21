import { Component } from '@angular/core';
import { BannerTitleComponent } from '../../../components/banner-title/banner-title.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMap } from '@angular/google-maps';
import { FooterComponent } from '../../../components/footer/footer.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [
    BannerTitleComponent,
    GoogleMapsModule,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './contacto-page.component.html',
  styleUrl: './contacto-page.component.css',
})
export class ContactoPageComponent {
  google = GoogleMap;
  mapOptions: google.maps.MapOptions = {
    center: { lat: 40.7128, lng: -74.006 },
    zoom: 12,
  };
}
