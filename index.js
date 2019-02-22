// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driverName){return driverName.toLowerCase() });
}
// const drivers = ['Bob Simpson', 'James Smart', 'John Jameson'];
//
// const driversObjects = [];
//   drivers.map(function(driver) {
//     driver.split("")})
// }
//
// function splitName(names) {
//   return names.map(function(name) {
//     return name.split(" ");
//   })
// }
//
//
// const splitNames = splitName(drivers);
//
// function objectConstructor(splitNames) {
//   const driversObjects= [];
//   splitNames.map(function(splitName) {
//     const newObj = {};
//     newObj.firstName = splitName[0];
//     newObj.secondName = splitName[1];
//     return driversObjects.push(newObj);
//   })
//   return driversObjects;
// }
//
// objectConstructor(splitNames);
//
// const drivers = [
//         { name: 'Bobby',   hometown: 'Pittsburgh'  },
//         { name: 'Sammy',   hometown: 'New York'    },
//         { name: 'Sally',   hometown: 'Cleveland'   },
//         { name: 'Annette', hometown: 'Los Angeles' },
//         { name: 'Bobby',   hometown: 'Tampa Bay'   }
//       ];
//
function attributesToPhrase(drivers) {
  const strings = [];
  drivers.map(function(driver) {
    strings.push(`${driver.name} is from ${driver.hometown}`)
  })
  return strings;
}

attributesToPhrase(drivers);
