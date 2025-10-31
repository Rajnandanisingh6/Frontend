var arr =[22,32,44,55,];

let filterArr=arr.filter((item,ind,arr)=>{
    if(item%2==0){
        return true;
    }
})
console.log(filterArr);

// filter method  kyya hai -- filter method array ke har element par ek function apply karta hai aur ek naya array return karta hai jisme wo elements hote hain jo function ke condition ko satisfy karte hain.

