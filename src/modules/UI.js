export default class UI {
    static resetComment() {
      const list = document.querySelector('.score-list');
      list.innerHTML = '';
    }
  
    static populateMeal(mealList) {
      console.log('in meal list UI' + (mealList[0]))
      mealList.forEach((s, index) => {
        const list = document.querySelector('.main-display');
        const li = document.createElement('li');
        li.classList.add('meal')

        li.innerHTML = `
        <img src=${s.strMealThumb} alt="meal-img">
        <div class="meal-wrapper">
            <p class="meal-name"> ${s.strMeal}</p>
            <div class="likes-wrapper">
                <i class="fas fa-heart"></i>
                <span class="likes-count"> 5</span>
            </div>
        </div>
       <button class = "comments"> Comments </button>
       `
        li.id= s.idMeal;
        list.appendChild(li);
      });
    }
  
    // get user and score from the UI
    getComments() {
      const userOb = {};
      const user = document.getElementById('name');
      const score = document.getElementById('score');
      if (user.value !== '' && typeof parseInt(score.value, 10) === 'number') {
        userOb.user = user.value;
        userOb.score = parseInt(score.value, 10);
        user.value = '';
        score.value = '';
      } else {
        this.alert('Please enter valid data');
      }
      return userOb;
    }
  }
  