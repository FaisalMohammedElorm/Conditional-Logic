
function checkForLeapYear(number){
  if(number % 4 === 0 && number % 100 !== 0){
    return true;
  }
  return false;
}
const isLeap = checkForLeapYear(2024);
console.log(isLeap);