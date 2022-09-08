import {fetchData, getData, sendData} from './modules/apis.js';
import UI from './modules/UI.js'
import Meal from './modules/meal.js';
import MealList from './modules/MealList.js';
import './style.css';

const FOOD_API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1/';
const ALL_FOOD_ENDPOINT = 'filter.php?c=Seafood';
const ALL_FOOD_API_URL = FOOD_API_BASE_URL + ALL_FOOD_ENDPOINT;

const INV_API_BASE = 'https://us-central1-involvement-api.cloudfunctions.net/'
+ 'capstoneApi/apps/';
const INV_API_KEY = 'T9ojq4zOnjo8oVysI3BL';
const LIKES_ENDPOINT = '/likes';
const COMMENT_ENDPOINT = '/comments';
let myMealList= new MealList();


// get all the like buttons
const likeButtons = document.querySelectorAll('.likes-count');
  likeButtons.forEach((likeBtn) => {
    const foodId = likeBtn.parentElement.parentElement.parentElement.id;
    likeBtn.addEventListener('click', () => {
     //code to handle like
    });
  });


window.addEventListener('load', () => {
  const fetchedData = fetchData(ALL_FOOD_API_URL);
 
  fetchedData.then((meals) => {
    const sortedList = meals;
  
    let tempList= myMealList.addMeals(meals)
   
   UI.populateMeal(Array.from(tempList));
   
  });
});