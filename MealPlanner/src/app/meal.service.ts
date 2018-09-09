import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private http: Http) {  }

  // retrieve meals
  getMeals()
  {
    return this.http.get('http://localhost:3000/api/meals')
      .pipe(map(res => res.json()));  
  }

  // add meal
  addMeal(newMeal)
  {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/meal', newMeal, {headers:headers})
      .pipe(map(res => res.json()));
  }

  // delete meal
  deleteMeal(id)
  {
    return this.http.delete('http://localhost:3000/api/meal/' + id)
      .pipe(map(res => res.json()));
  }

}
