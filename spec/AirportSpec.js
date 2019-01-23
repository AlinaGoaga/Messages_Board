describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = new WeatherForecast();
    airport = new Airport(weather);
    plane = 'plane';
  });

describe('is able to land and take off plane', function() {
  it("is able to land planes", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.land(plane);
    expect(airport.planesQueue).toContain(plane);
  });

  it("is able to take off a plane", function() {
    spyOn(weather, 'isStormy').and.returnValue(false);
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.planesQueue).toEqual([]);
  });
});


});
