const array1 = [false, false, false, false];

const nummer = 3;
const array2 = array1.reduce(
  (previousValue) => {
    temp = new Array(0)
    
    if (previousValue.length === nummer - 1){
  		temp.push(true)
  	} else {
   	 temp.push(false)
  	} if (previousValue) {return previousValue.concat(temp)} else {return temp}
    
  }, 0
);

console.log(array2);

// This is so stupid xD Well at least I learned something about reduce()