// var x=1;

// a();
// b();
// console.log(x);

// function a(){
//     var x=10;
//     console.log(x);
// };

// function b(){
//     var x=100;
//     console.log(x)
// };


// function a(){

//     console.log(b);
// }

// var b=10;
// a();


// let obj={place:"Halkarni",Name:"Amey",obj3:{work:"10 hours"}};
// // let obj2=JSON.parse(JSON.stringify(obj));
// let obj2={...obj,obj3:{...obj.obj3}};

// obj2.place='Kolhapur';
// obj2.obj3.work="20 hours";


// console.log(obj);
// console.log(obj2);




// function a(){
//   function b(){
//      console.log(x);
//   }
// b();
// }

// var x=10;
// a();


// var a=10;
// let b=10;
// console.log(window);
// console.log(window.a);
// console.log(window.b);


// function a(){

//   var b=10;


// }


// console.log(b) // b is not defined


let arr=[5,3,2,1,8,9,0,10,30]

let n=arr.length;   ///9

while(n>1){
      for(let a=0;a<n;a++){
         let temp;
         if(arr[a]<arr[a+1]){
             temp=arr[a];   //5
             arr[a]=arr[a+1];  //3
             arr[a+1]=temp;  //5
         }

      }

      n--;
}

console.log(arr);




// arr.sort((a,b)=>{
//     return a-b
// });
// console.log(arr);


////arr [3,5,2,1,8,9,0]
///arr[3,2,5,1,8,9,0]
///arr[]

////arr[.............,9]






// let length=arr.length;

// while(length>1){

// for(a=0;a<=length;a++){
//  let temp;
//    if(arr[a]>arr[a+1]){
//     temp=arr[a];
//     arr[a]=arr[a+1];
//     arr[a+1]=temp; 
//    }

// }
// length--;

// }
// console.log(arr);


function x(){
    var a=10;

   function y(){
    console.log(a)
   } 

  var a=20;
  return y;
}

let z=x();

console.log(z);
z();















