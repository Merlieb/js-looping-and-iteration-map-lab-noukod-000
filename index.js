// Code your solution in this file.
const drivers = [
        { name: 'Bobby',   hometown: 'Pittsburgh'  },
        { name: 'Sammy',   hometown: 'New York'    },
        { name: 'Sally',   hometown: 'Cleveland'   },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby',   hometown: 'Tampa Bay'   }
      ];

function attributesToPhrase(drivers) {
  const strings = [];
  drivers.map(function(driver) {
    strings.push(`${driver.name} is from ${driver.hometown}`)
  })
  return strings;
}

attributesToPhrase(drivers);
