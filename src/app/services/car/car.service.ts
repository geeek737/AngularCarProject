import { Injectable } from '@angular/core';

export interface Car {
  id: number;
  brand: string;
  model: string;
}

@Injectable({
  providedIn: 'root'
})

export class CarService {
  private cars: Car[]

  constructor() {
    this.cars = [
      { id: 1, brand: 'Toyota', model: 'Corolla' },
      { id: 2, brand: 'Honda', model: 'Civic' },
      { id: 3, brand: 'Ford', model: 'Focus' },
    ]
   }

   getCars() {
    return this.cars;
   }
}
