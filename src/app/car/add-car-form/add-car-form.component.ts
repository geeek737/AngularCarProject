import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CarService } from '../../services/car/car.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-car-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule
  ],
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.Component.scss'],
})
export class AddCarFormComponent {
  carForm = this.fb.group({
    brand: ['', Validators.required],
    model: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private carService: CarService) {}

  submit() {
    if (this.carForm.valid) {
      const newId = this.carService.getLastCarId() + 1;
      const newCar = this.carForm.value;
      console.log(newCar);
      const car = {
        id: newId,
        brand: newCar.brand,
        model: newCar.model,
      }
      this.carService.addCar(car);
      this.carForm.reset();
    }
  }
}
