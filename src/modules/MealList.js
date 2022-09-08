export class Meal{
  constructor(){
      this.id = 0;
      this.mealName='';
      this.image=''
      this.comments=[];
      this.likes=0;
  }
}

export default class MealList{
    constructor() {
        this.meals = [];
      }
    
        
      addMeals(allMeals) {
        this.meals = allMeals;
        let mealInfo = new Meal();
        this.meals.forEach((meal, index) => {
          meal.likes=0;
          meal.comments = ['test','test2'];
        }); 
        console.log('in add meals ----' + (this.meals[0]).id)
        return this.meals;
      }
    
}