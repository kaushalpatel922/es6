//Using For...of loop

const digits = [0,1,2,3,4,5];

for (const digit of digits) {
  if(digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

//prints 1, 3, 5


//Print days with first letter being capitalized
const days = ['sunday','monday','tuesday'];

for (let day of days) {
  day = day.charAt(0).toUpperCase() + day.slice(1);
  console.log(day);
}

//prints Sunday Monday Tuesday
