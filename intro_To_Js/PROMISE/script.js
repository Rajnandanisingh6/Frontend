//promise creation
let pr = new Promise((resolve, reject) => {
    //asynchronous operation
});

console.log(pr); //pending

// pendingstate --> fulfilled state , pendingstate --> rejected state , resolved , rejected states

let pr1 = new Promise((resolve, reject) => {          // reject call hoga tabhi ye pending se rejected state me jayega
                                                    // resolve call hoga tabhi ye pending se fulfilled state me jayega
    // setTimeout(() => {
    //     resolve("data fetched successfully");
    // }, 5000);
    setTimeout(() => {
        reject("error while fetching data");
    }, 5000);

});

//console.log(pr);


//++++++++++++++++++++++++++++++++++++++++++++++

pr 
   .then((x) =>{                      //jab promise fulfilled state me jayega tab ye then chalega
                                     //jab promise rejected state me jayega tab ye catch chalega
    console.log(x);
})
    .catch((x)=>{
        console.log(x);
    })
