let pr = new Promise((resolve, reject) => {         
                                                    
    setTimeout(() => {
        let arr =[33,44,55,66];
        resolve(arr);
    }, 6000);
});
console.log('start')

pr 
    .then((x) =>{
        console.log(x);
    })
    .catch((x)=>{
        console.log(x);
    })
console.log('End');   // start ke baad end aayega phir 6 second ke baad array aayega kyunki promise asynchronous hota hai
// reason ye hai ki jab promise create hota hai to wo turant resolve ya reject nahi hota balki kuch time leta hai isliye end pehle aata hai
// aur jab promise resolve ho jata hai tab then wala part chalta hai
// agar promise reject hota to catch wala part chalta
//is case promise 6 second me resolve hoga to 6 second ke baad then wala part chalega toh output kya hoga
// start
// end
// [33,44,55,66]
//kaise aaya ye output
// jab promise create hota hai to wo turant pending state me chala jata hai
// phir javascript engine next line pe chala jata hai aur end print kar deta hai
// iske baad 6 second ke baad promise resolve ho jata hai to then wala part chalta hai aur array print ho jata hai