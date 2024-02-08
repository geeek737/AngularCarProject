import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Car, CarService } from './services/car/car.service';
import { FontSizeDirective } from './directives/car/font-size.directive';
import { CarListComponent } from './car/car-list/car-list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    FontSizeDirective, 
    CarListComponent,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cars: Car[];
  carService: CarService;
  selectedCar?: Car;
  selectedCarImgSrc?: string;

  constructor(carService: CarService) {
    this.carService = carService;
    this.cars = this.carService.getCars();
    console.log(this.cars);
  }

  displayCar(car: Car) {
    console.log(car);
    this.selectedCar = car;
    this.selectedCarImgSrc = `assets/cars/${car.brand}-${car.model}.jpg`;
  }
}
