Restaurants.prototype.isGlutenFree() {
  if (restrictions.glutenfree === true) {
    search.results.push(this);
  }
}
