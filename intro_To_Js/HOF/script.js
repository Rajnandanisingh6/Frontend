function fun(){ // ak higher order function jo ak function ke andar dusra function leta hai ya return karta hai
    //first class function -- function ko variable me store kar sakte hai , function ko argument ke roop me pass kar sakte hai , function se return kar sakte hai
    //var x =20;
    var x=(a,b)=>{ // arrow function
        return a+b;
    }
}


//call back function -- function ko argument ke roop me pass karna
// setTimeout(() => console.log("X"), 1000);
// setTimeout(() => console.log("Y"), 500);
// console.log("Z");

// setTimeout(() => console.log("P"), 0);
// console.log("Q");
//output 

function notify(cb) {
  console.log("Notify Start");
  cb();
  console.log("Notify End");
}
notify(() => console.log("Callback Run"));

