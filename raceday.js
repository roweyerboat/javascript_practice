let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
const age = 19;
if (age > 18 && registeredEarly)
{raceNumber += 1000;
}
if (age > 18 && registeredEarly){
  console.log('Runner number ${raceNumber}: Early adults race at 9:30 am');
} else if (age > 18 &&! registeredEarly){
  console.log('Runner number ${raceNumber}: Late adults run at 11:00 am');
} else if (age < 18){
  console.log('Youth registrants run at 12:30 pm (regardless of registration)');
} else {
  console.log('Runner number ${raceNumber} please visit the registration desk for race time')
};