// async function fun(){        // async await ak keyword hai jab hum kisi function ke aage async lagate hai to wo function hamesha promise return karta hai
//     let x = "Hello";           //function define karne se phele use karte hai 
//     return  x;
// }

// let y = fun();
// console.log(y);



let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('resolve data')
    },4000)

});
// is promise ko handle karna hai .then aur .catch se
pr.then((x)=>{
    console.log(x);
})
.catch((x)=>{
    console.log(x);         
})

async function fetchData(){
    let x = await pr;
    console.log(x);
}
fetchData();
 