// let arr =[23,45,66,28,75]; // iterate hoga size - 1

// let x=arr.reduce((acc,item,ind,arr)=>{

//    // console.log("hello")
//    //console.log(item,ind,arr);
//    console.log(acc);

//    //return "hello"
//    return ind*5;
// })
// console.log(x);


// let arr1 =[23,45,66,28,75];
// //is array ka sum nikalna hai reduce method se

// let sum=arr1.reduce((acc,item)=>{
//     return acc+item;
// },0) // 0 is initial value of acc
// console.log(sum);

// let arr2 =[23,45,66,28,75];

// arr.reduce((acc,item)=>{  //single value return 
//     console.log("hello");

// })

// let arr=[
//     {firstName:'rahul',lastName:'jha',age:25},
//     {firstName:'smit',lastName:'shah',age:76},
//     {firstName:'meet',lastName:"patel",age:20},
//     {firstName:'jeet',lastName:'desai',age:25},
// ];
// //{25:2,76:1,20:1}
// let result=arr.reduce(acc,item=>{
//     if(acc[item.age]){
//         acc[item.age]++;
//         // return acc;     
//     }
//     else{
//         acc[item.age]=1;
//         return acc;
//     }
// },{});

// console.log(result);


//print  total marks for studentts with marks greater than 
//60 after 20 marks have been added to those who scored 
//less than 60

// let student =[
//     {name:"Smith",rollNumber:31,marks:80},
//     {name:"jet",rollNumber:15,marks:69},
//     {name:"meet",rollNumber:16,marks:35},
//     {name:"jeet",rollNumber:7,marks:55},  
// ];
// let totalMarks=student.map((item)=>{
//     if(item.marks<60){
//         item.marks+=20;
//     }
//     return item
   
    
// }),filter((item)=>{
//     if(item.marks>60){
//         return true;
//     }
// }).reduce((acc,item)=>{
//     return acc+item.marks
// },0)

// console.log(totalMarks);



// reduce method kya karta hai ki ye array ke sare elements ko ek single value me convert kar deta hai.
// ye ek callback function leta hai jisme 2 parameters hote hai acc( accumulator) and current item.
// acc wo value hoti hai jo hum accumulate kar rahe hote hai aur current item wo element hota hai jo abhi process ho raha hota hai.
// reduce method me hum ek initial value bhi de sakte hai acc ke liye, agar hum initial value nahi dete to acc ki initial value array ka pehla element hota hai aur current item dusra element hota hai.


