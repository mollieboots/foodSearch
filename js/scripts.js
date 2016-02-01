var mike_restaurant_1 = {
name: "Natural Selection",
cuisine: ["European"],
rating: 5,
price_range: 3,
location: "45.560957, -122.634061",
restrictions: ["glutenFree", "vegetarian", "pescetarian", "vegan", "dairyFree",  "hindu", "jewish", "muslim"]
}

var restaurant1 = {
name: "The Original Dinerant",
cuisine: ["Breakfast","Brunch","Diner"],
rating: 4,
pricerange: 2,
restrictions: ["glutenFree", "vegetarian", "pescetarian", "nutFree", "jewish, muslim"]
}

var bunkSandwiches = {
name: "Bunk Sandwiches",
cuisine: ["sandwiches","brunch"],
rating: 4,
pricerange: 1,
restrictions: ["vegan", "vegetarian", "pescatarian", "nutFree", "hindu", "jewish", "muslim", "dairyFree"]
}

var restaurants = [mike_restaurant_1, bunkSandwiches, restaurant1];


function Search (location, cuisine, limits, results) {
  this.location = location;
  this.cuisine = cuisine;
  this.limits= limits;
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


function meetsRestrictions(userInput) {
    restaurants.forEach(function(restaurant) {
      var restaurantMatch = userInput.every(function (val) {
        return restaurant.restrictions.indexOf(val) >= 0; });
      if (restaurantMatch === true){
        newSearch.results.push(restaurant.name);
      }
  });
    return newSearch.results;
}
