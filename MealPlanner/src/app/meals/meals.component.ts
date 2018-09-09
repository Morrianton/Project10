import { Component, OnInit } from '@angular/core';
import { MealService } from '../meal.service';
import { Meal } from '../meal';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css'],
  providers: [MealService]
})
export class MealsComponent implements OnInit {
meals: Meal[];
meal: Meal;
entree: string;
side: string;
drink: string;

  constructor(private mealService: MealService) { }

  addMeal() {
    const NEW_MEAL = {
      entree: this.entree,
      side: this.side,
      drink: this.drink
    }

    this.mealService.addMeal(NEW_MEAL)
    .subscribe(meal => {
      this.meals.push(meal);
      this.mealService.getMeals()
      .subscribe(meals => 
        this.meals = meals);
    })
  }

  deleteMeal(id:any)
  {
    let meals = this.meals;

    this.mealService.deleteMeal(id)
    .subscribe(data =>{
      if(data.n == 1)
      {
        for(let i = 0; i < meals.length; i++)
        {
          if(meals[i]._id == id)
          {
            meals.splice(i, 1);
          }
        }
      }
    });
  }

  ngOnInit() {
    this.mealService.getMeals()
      .subscribe(meals => 
        this.meals = meals);
    
  }

}
