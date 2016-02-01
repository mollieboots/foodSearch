describe('isGlutenFree', function(){
  it("locates restaurants that meet certain criteria", function(){
    expect(foodFinder('glutenfree')).to.eql(["The Original Dinerant", "Natural Selection"]);
  });
});


search {
  location:
  cuisine:
  restrictions:
  results: []
}
