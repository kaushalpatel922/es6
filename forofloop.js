//Using For...of loop

const digits = [0,1,2,3,4,5];

for (const digit of digits) {
  if(digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}

//print 1, 3, 5
