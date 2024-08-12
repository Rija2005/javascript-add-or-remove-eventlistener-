// //for each loop;; used for arrays

// let text ="";
// const fruits = ["apple","orange", "cherry","mango"]

// fruits.forEach(myFruits)

// document.getElementById("demo").innerHTML = text;

// function myFruits(item, index){
//     text += index +":"+ item +"<br>"
// }


// //
// let sum=0;
// const number=[56,89,65,34];
// number.forEach(myNumber);
// document.write(sum)
// function myNumber(item){
//     sum+=item

// }


// const num=[56,89,65,34];
// num.forEach(myNumber);
// document.write(num)
// function myNumber(item, index, arr) {
//     arr[index] = item * 10;
//   }

// //eventsss;;USING ADD EVENT LISTENER//pointer event ,mouse event

// let button = document.querySelector("#btn1");
// button.addEventListener("dblclick" ,(e) =>{
//     console.log(e);//all properties
//     console.log(e.type);//specific property
//     console.log(e.clientY);

// })
// //arrow function
// const handler2 =()=>{
//     console.log("this is event listner 2");
// }
// button.addEventListener("click",handler2)//this is another way to use addevent listener 



// button.addEventListener("mouseover" ,(e)=>{//mouse over proerty
   
//     console.log("this is event listner 1");
// } )

// button.addEventListener("click" ,(e)=>{//mouse over proerty
    
//     console.log("this is event listner 3");
// } )

  
// button.removeEventListener("click",  handler2,)//use this to remove the event


//The removeEventListener() method removes an event handler from an element.
const myDiv = document.getElementById("main");

function myFunction() {
    document.getElementById("demo").innerHTML = Math.random();
  }
myDiv.addEventListener("mousemove", myFunction);

function removeHandler() {
  myDiv.removeEventListener("mousemove", myFunction);
}

