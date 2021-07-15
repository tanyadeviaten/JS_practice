'use strict';


//создание объекта drinkStorage класса HashStorage
let drinkStorage = new HashStorage();

let addInformation = document.getElementById('addInformation');
let getInformation = document.getElementById('getInformation');
let deleteInformation = document.getElementById('deleteInformation');
let listDrinks = document.getElementById('listDrinks');
const ALCOHOL_KEY = 'алкогольный';
const RECIPE_KEY = 'рецепт приготовления';

addInformation.addEventListener('click', function () {
  let nameDrink1 = prompt('Введите название напитка');
  if (!nameDrink1) return console.log('Вы не ввели название напитка');
  let nameDrink = nameDrink1.toLowerCase();
  let inf = {};
  let alcoholicDrink = confirm('Напиток содержит алкоголь? Нажмите OK, если содержит и Отмена, если не содержит');
  inf[ALCOHOL_KEY] = alcoholicDrink ? 'да' : 'нет';
  let recipeOfDrink = prompt('Введите рецепт напитка или просто его ингредиенты');
  if (!recipeOfDrink) {
    return console.log(`Вы не ввели ${RECIPE_KEY}`);
  } else inf[RECIPE_KEY] = recipeOfDrink;
  drinkStorage.addValue(nameDrink, inf);
});

getInformation.addEventListener('click', function () {
  let nameDrinkQuestion1 = prompt('Введите название напитка');
  if (!nameDrinkQuestion1) return console.log('Вы не ввели название напитка');
  let nameDrinkQuestion = nameDrinkQuestion1.toLowerCase();
  if (nameDrinkQuestion in drinkStorage.obj) {
    console.log('название: '+nameDrinkQuestion);
    console.log(ALCOHOL_KEY +': '+ drinkStorage.getValue(nameDrinkQuestion)[ALCOHOL_KEY]);
    console.log(RECIPE_KEY +': '+drinkStorage.getValue(nameDrinkQuestion)[RECIPE_KEY]);
  } else console.log('Такого напитка в списке нет');
});

deleteInformation.addEventListener('click', function () {
  let nameDelete1 = prompt('Введите название напитка');
  if (!nameDelete1) return console.log('Вы не ввели название напитка');
  let nameDelete = nameDelete1.toLowerCase();
  console.log(drinkStorage.deleteValue(nameDelete));
});

listDrinks.addEventListener('click', function () {
  console.log(drinkStorage.getKeys());
});

