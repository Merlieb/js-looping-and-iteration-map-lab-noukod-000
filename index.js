// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driverName){return driverName.toLowerCase() });
  }

function attributesToPhrase(drivers) {
  const strings = [];
  drivers.map(function(driver) {
    strings.push(`${driver.name} is from ${driver.hometown}`)
  })
  return strings;
}

attributesToPhrase(drivers);
