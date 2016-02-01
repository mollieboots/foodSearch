describe('isGlutenFree', function(){
  it("locates restaurants that meet certain criteria", function(){
    expect(isGlutenFree()).to.eql(["Natural Selection", "The Original Dinerant"]);
  });
});
