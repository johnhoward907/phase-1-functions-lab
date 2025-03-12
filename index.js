// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const headquarters = 42;
    return Math.abs(someValue - headquarters);
  }
  function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue)*264
  }
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination-start)*264

  }
  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance=Math.abs(destination-start)*264
    if (distance<=400){
      return 0
    } else if(distance>=400 && distance<=2000){
      return (distance-400)*0.02
    } else if(distance>2000 && distance<=2500 ){
      return 25
    }else {
      return 'cannot travel that far'
    }
  }