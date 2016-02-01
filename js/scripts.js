var mike_restaurant_1 = {
name: "Natural Selection",
cuisine: ["European"],
rating: 5,
price_range: 3,
location: "45.560957, -122.634061",
restrictions:
{glutenFree: true, vegetarian: true, pescetarian: true, vegan: true, dairyFree: true, nutFree: false, hindu: true, jewish: true, muslim: true}
}

var restaurant1 = {
name: "The Original Dinerant",
cuisine: ["Breakfast","Brunch","Diner"],
rating: 4,
pricerange: 2,
restrictions: {glutenFree: true, vegetarian: true, pescetarian: true, vegan: false, dairyFree: false, nutFree: true, hindu: false, jewish: true, muslim: true}
}

var bunkSandwiches = {
name: "Bunk Sandwiches",
cuisine: ["sandwiches","brunch"],
rating: 4,
pricerange: 1,
restrictions: {glutenFree: false, vegan: true, vegetarian: true, pescatarian: true, nutFree: true, hindu: true, jewish: true, muslim: true, dairyFree: true}
}

var restaurants = [mike_restaurant_1, bunkSandwiches, restaurant1];


function Search (location, cuisine, restrictions, results) {
  this.location = location;
  this.cuisine = cuisine;
  this.restrictions= restrictions;
  this.results = [];
}

  var newSearch = new Search();

function isGlutenFree() {
    restaurants.forEach(function(restaurant) {
      if (restaurant.restrictions.glutenFree === true && restaurant.restrictions.vegetarian === true) {
        newSearch.results.push(restaurant.name);
    }
  });
    return newSearch.results;
}

[]

function isGlutenFree() {
    restaurants.forEach(function(restaurant) {
      if (restaurant.restrictions.glutenFree === true && restaurant.restrictions.vegetarian === true) {
        newSearch.results.push(restaurant.name);
    }
  });
    return newSearch.results;
}
