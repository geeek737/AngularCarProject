import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../../services/car/car.service';
import { CommonModule } from '@angular/common';
import { FontSizeDirective } from '../../directives/car/font-size.directive';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-car-list',
  standalone: true,
  imports: [
    CommonModule, 
    FontSizeDirective,
    MatChipsModule
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {
  @Input() cars: Car[] = [];
  @Output() carSelected = new EventEmitter<Car>();

  selectCar(car: Car) {
    this.carSelected.emit(car);
  }

}
