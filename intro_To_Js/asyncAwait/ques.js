// let pr = new Promise((resolve,reject)=>{
//     setTimeout(() =>{
//         resolve('promisel resolved data');
//     },20000);
// })
// let pr2 = new Promise((resolve,reject) =>{
//     serTimeout(()=>{
//         resolve('promise2 resolved data');
//     },10000);
// })



// function fun1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('promise1 resolve data')
//         }, 10000);
//     })
// }
// function fun2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve('promise2 resolve data')
//         }, 20000);
//     })
// }
// console.log('start');
// async function handlePromise(){
//     console.log('hello world');
//     let data1=await fun1();
//     console.log(data1);
//     console.log('console after resolve');
//     let data2=await fun2();
//     console.log(data2);
// }
// handlePromise();
// console.log('end');


async function asyncFun(){
    console.log("Async function");     
    return "Async result ";
}

asyncFun().then((result) =>{
    console.log(result);
});

console.log("Synchoronous log");