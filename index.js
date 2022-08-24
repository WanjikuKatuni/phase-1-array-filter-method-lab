const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
const newDrivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(collection, driverName){
    const newCollection = []

    for (const driver of collection){
        if(driver.toLowerCase() === driverName.toLowerCase()){
            newCollection.push(driver)
        }
    }
    return newCollection
}

console.log(findMatching(drivers,"Bobby"));
  

function fuzzyMatch(collection, driverName){
    const newCollection = []
    
    for (const driver of collection){
        if(driver.slice(0,2) === driverName){
            newCollection.push(driver)
        }
        else if (driver.slice(0,1)=== driverName){
            newCollection.push(driver)
        }
     }
    return newCollection;
}

console.log(fuzzyMatch(drivers,"Sa"));


function matchName(collection,value){

    const collectionOfNewDrivers = []

    for(const newDriver of collection){
        if(newDriver.name === value){
            collectionOfNewDrivers.push(newDriver)
        }
    }
    return collectionOfNewDrivers
}

console.log(matchName(newDrivers, "Bobby"));