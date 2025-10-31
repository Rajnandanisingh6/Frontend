// map method  kyya hai -- map method array ke har element par ek function apply karta hai aur ek naya array return karta hai jisme modified elements hote hain.
// map method ka syntax hai: array.map(function(currentValue, index, array){ // function body })
//interview question
// map method original array ko modify nahi karta hai, balki ek naya array return karta hai jisme function ke dwara kiye gaye changes hote hain.
//map method me kya yaad rakhna chahiye ki ye har element par function apply karta hai aur ek naya array return karta hai jisme modified elements hote hain.
//aur ye bhi ki map method original array ko modify nahi karta hai.
//aur ye bhi ki map method me hum ek function pass karte hain jo har element par apply hota hai.
//aur ye bhi ki map method me hum arrow function ka use kar sakte hain.


//map same array length ko return karta hai. // array ke andar uske element ko change kar sakte hai


 var mapArr=[1,2,3,4,5];

 arr.map((item,ind,arr)=>{
   // console.log("hello");
    //console.log(item,ind,arr);
    return item*2;
 })

 console.log(mapArr)