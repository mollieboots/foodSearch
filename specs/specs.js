// describe('isGlutenFree', function(){
//   it("locates restaurants that meet certain criteria", function(){
//     expect(isGlutenFree()).to.eql(["Natural Selection", "The Original Dinerant"]);
//   });
// });

// describe('meetsRestrictions', function(){
//   it("locates restaurants that meet multiple criteria", function(){
//     expect(meetsRestrictions(["glutenFree", "vegan"])).to.eql(["Natural Selection"]);
//   });
// });

describe('meetsRestrictions', function(){
  it("locates restaurants that meet multiple criteria", function(){
    expect(meetsRestrictions(["dairyFree", "nutFree"])).to.eql(["Bunk Sandwiches"]);
  });
});
