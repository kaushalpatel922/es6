//using rest parameter - passing ... into function

//Calculate an average of numbers passed in the argument
function average(...nums) {
  let length = nums.length;
  //if nums is more than 1
  if(length > 1) {
    let total = 0;

    for (const num of nums) {
      total += num;
    }
    total = total/length;
    return total;
  //if no number passed, return 0
  } else {
    return 0;
  }
}

average(2,6);               //output 4
average();                  //output 0
average(2,6,10);            //output 6
average(7,1432,12,13,100);  //output 312.8
