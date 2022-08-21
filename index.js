
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, letter) {
    return drivers.filter((driver) => driver.toLowerCase() === letter.toLowerCase()
    );
  }

function fuzzyMatch(drivers, test){
    return drivers.filter((find) => find.toLowerCase().indexOf(test.toLowerCase()) === 0)
}

function matchName(drivers, checkName){
    return drivers.filter((find) => find.name === checkName)
}