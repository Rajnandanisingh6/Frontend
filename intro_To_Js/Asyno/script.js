// console.log("start");

// setTimeout(()=>{    //setTimeout javascript ka nahi browser ka part hai
//     console.log("mid");
// },5000);

// setTimeout(()=>{      
//     console.log("hello")
// },0);


// console.log("end");

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// console.log("start");

// setTimeout(()=>{         //kya issue hai timeout ke sath  isko trustissue kehte hai kyunki ye guaranteed nahi hota ki ye time par chalega
//     console.log("hello");
// },4000);

// let x = new Date();
// let y =new Date().getTime();
// console.log(x);
// console.log(y);

// while(new Date().getTime() <y+1000){

// }


// console.log("end");


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

setInterval(()=>{                //setInterval baar baar chalega jab tak clear na kar do
    console.log("hello")
},3000);

console.log("end");