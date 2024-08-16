//////basic operation on array




///need to remove last three element

//1.
let number =[1,2,3,4,5,6]
number.pop();
number.pop();
number.pop();

console.log(number);

//2.
let number1 =[1,2,3,4,5,6]
for(let a=0;a<=3;a++){
  number1.pop();
}
console.log(number1)

//---print from array
//3.

let array2=[1,2,3,4,5];

for(let a=0;a<array2.length;a++){
    console.log(array2[a]);
}

//4. --print first 4 number


let array3=[1,2,3,4,5,6,7];
let n=4;

for(let a=0;a<array3.length;a++){
   if(a===n){
    break;   ///---break the for loop
   }
  console.log(array3[a]);
}

///5. if we want to skip any number in array  
let array4=[1,2,3,4,5,6,7];

for(let a=0;a<=array4.length;a++){
   if(a===2 ||a===3){
    continue;         //--- It will skip the 2,3 position array elemet and print other
   }

   console.log(array4[a]);

}


///---print last 3 elemet 

let array5=[1,2,3,4,5,6,7];

let last3rdIndex=arr.length-3;

for(let a=last3rdIndex;






